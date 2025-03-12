import axios from 'axios';

interface TravelDetails {
  title: string;
  airline: string;
  departureDate: string;
  returnDate: string;
  departureTime: string;
  returnTime: string;
  baggage: string;
  phones: string[];
  emails: string[];
  price?: string;
  additionalInfo?: string;
}

export class TelegramBot {
  private readonly token: string;
  private readonly channelId: string;
  private readonly apiUrl: string;
  private readonly isDevelopment: boolean;

  constructor() {
    // Check if we're in development mode
    this.isDevelopment = import.meta.env.MODE === 'development' || 
                         import.meta.env.VITE_TELEGRAM_BOT_TOKEN === 'development';
    
    // Use environment variables for sensitive data
    this.token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "";
    this.channelId = import.meta.env.VITE_TELEGRAM_CHANNEL_ID || "";
    
    if (!this.token && !this.isDevelopment) {
      console.warn('Telegram bot token not found in environment variables');
    }
    
    if (!this.channelId && !this.isDevelopment) {
      console.warn('Telegram channel ID not found in environment variables');
    }
    
    this.apiUrl = `https://api.telegram.org/bot${this.token}`;
  }

  async shareNewBlogPost(post: {
    title: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
    author: string;
    travelDetails?: TravelDetails;
  }) {
    // If in development mode, just log the post and return success
    if (this.isDevelopment) {
      console.log('Development mode: Would send to Telegram:', post);
      return true;
    }
    
    // If token or channel ID is missing, log a warning and return
    if (!this.token || !this.channelId) {
      console.warn('Telegram bot token or channel ID is missing. Skipping Telegram notification.');
      return false;
    }
    
    try {
      // Use a hardcoded base URL for development, or window.location.origin for production
      const baseUrl = process.env.NODE_ENV === 'development' 
        ? 'https://elsol-experience.vercel.app' 
        : window.location.origin;
      const postUrl = `${baseUrl}/blog/${post.slug}`;
      
      let message: string;
      
      if (post.travelDetails) {
        // Format travel-specific post
        const td = post.travelDetails;
        message = `🌟 ELSOL TRAVEL AGENCY 🌟\n\n` +
          `Your Gateway to Seamless Journeys\n\n` +
          `🛫 ${td.airline} SPECIAL OFFER 🛬\n\n` +
          `📅 Travel Dates:\n` +
          `🛫 Departure: ${td.departureDate} | ${td.departureTime}\n` +
          `🛬 Return: ${td.returnDate} | ${td.returnTime}\n\n` +
          `✨ Package Includes:\n` +
          `✅ ${td.baggage} Baggage Allowance\n` +
          `✅ Expert Travel Assistance\n` +
          `✅ Flexible Booking Options\n\n` +
          `${td.price ? `💰 Special Price: ${td.price}\n\n` : ''}` +
          `🔖 Limited Availability - Book Now!\n\n` +
          `📬 Contact Us:\n` +
          `${td.phones.map(phone => `📞 ${phone}`).join('\n')}\n` +
          `${td.emails.map(email => `📧 ${email}`).join('\n')}\n\n` +
          `🎯 Why Choose Us?\n` +
          `✔️ Certified Travel Experts\n` +
          `✔️ Best Price Guarantee\n` +
          `✔️ 24/7 Customer Support\n\n` +
          `${td.additionalInfo ? `ℹ️ Additional Information:\n${td.additionalInfo}\n\n` : ''}` +
          `✨ BOOK NOW & EMBARK ON YOUR DREAM JOURNEY! ✨`;
      } else {
        // Format regular blog post
        message = `📝 New Blog Post\n\n${post.title}\n\n${post.excerpt}\n\n✍️ By: ${post.author}\n\nRead more: ${postUrl}`;
      }

      // Check if the image URL is a base64 string
      if (post.imageUrl && post.imageUrl.startsWith('data:image')) {
        // Skip image for base64 data URLs
        await this.sendMessage(message);
      } else if (post.imageUrl) {
        try {
          await this.sendPhoto(post.imageUrl, message);
        } catch (photoError) {
          console.error('Failed to send photo, falling back to text-only message:', photoError);
          await this.sendMessage(message);
        }
      } else {
        await this.sendMessage(message);
      }

      return true;
    } catch (error) {
      console.error('Error sharing blog post to Telegram:', error);
      if (axios.isAxiosError(error)) {
        throw new Error(`Telegram API Error: ${error.response?.data?.description || error.message}`);
      }
      throw error;
    }
  }

  private async sendMessage(text: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/sendMessage`, {
        chat_id: this.channelId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: false
      });
      return response.data;
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      if (axios.isAxiosError(error)) {
        throw new Error(`Telegram API Error: ${error.response?.data?.description || error.message}`);
      }
      throw error;
    }
  }

  private async sendPhoto(photoUrl: string, caption: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/sendPhoto`, {
        chat_id: this.channelId,
        photo: photoUrl,
        caption: caption.substring(0, 1024), // Telegram has a 1024 character limit for captions
        parse_mode: 'HTML'
      });
      return response.data;
    } catch (error) {
      console.error('Error sending photo to Telegram:', error);
      if (axios.isAxiosError(error)) {
        throw new Error(`Telegram API Error: ${error.response?.data?.description || error.message}`);
      }
      throw error;
    }
  }
}