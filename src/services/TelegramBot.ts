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
  private readonly token: string = "7607840158:AAGVqn228DlKAaM8QSgRnn3QRYi6jmrI-c4";
  private readonly channelId: string = "-1002358332198";
  private readonly apiUrl: string;

  constructor() {
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
    try {
      const postUrl = `${window.location.origin}/blog/${post.slug}`;
      
      let message: string;
      
      if (post.travelDetails) {
        // Format travel-specific post
        const td = post.travelDetails;
        message = `🌟 ELSOL TRAVEL AGENCY 🌟
Your Gateway to Seamless Journeys

🛫 ${td.airline} SPECIAL OFFER 🛬

📅 Travel Dates:
🛫 Departure: ${td.departureDate} | ${td.departureTime}
🛬 Return: ${td.returnDate} | ${td.returnTime}

✨ Package Includes:
✅ ${td.baggage} Baggage Allowance 🧳🎒
✅ Expert Travel Assistance 📞
✅ Flexible Booking Options 📝

${td.price ? `💰 Special Price: ${td.price}\n` : ''}🔖 Limited Availability - Secure Your Seat Today!

📬 Contact Us:
${td.emails.map(email => `📧 ${email}`).join('\n')}
${td.phones.map(phone => `📞 ${phone}`).join('\n')}

🎯 Why Choose Us?
✔️ Certified Travel Experts 🌐
✔️ Best Price Guarantee 💸
✔️ 24/7 Customer Support ⏰

📖 Read more:
🔍 <a href="${postUrl}">Click Here for Detailed Information →</a>

✨ BOOK NOW & EMBARK ON YOUR DREAM JOURNEY! ✨

${td.additionalInfo ? `\nℹ️ Additional Information:\n${td.additionalInfo}` : ''}`.trim();
      } else {
        // Format regular blog post
        message = `
<b>📝 New Blog Post</b>

<b>${post.title}</b>

${post.excerpt}

✍️ By: ${post.author}

<a href="${postUrl}">Read full article →</a>
`.trim();
      }

      // First send the image if available
      if (post.imageUrl) {
        await this.sendPhoto(post.imageUrl, message);
      } else {
        await this.sendMessage(message);
      }

      return true;
    } catch (error) {
      console.error('Error sharing blog post to Telegram:', error);
      throw error;
    }
  }

  private async sendMessage(text: string, parseMode: 'HTML' | 'Markdown' = 'HTML') {
    try {
      const response = await axios.post(`${this.apiUrl}/sendMessage`, {
        chat_id: this.channelId,
        text,
        parse_mode: parseMode,
        disable_web_page_preview: false
      });
      return response.data;
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      throw error;
    }
  }

  private async sendPhoto(photoUrl: string, caption: string) {
    try {
      const response = await axios.post(`${this.apiUrl}/sendPhoto`, {
        chat_id: this.channelId,
        photo: photoUrl,
        caption,
        parse_mode: 'HTML'
      });
      return response.data;
    } catch (error) {
      console.error('Error sending photo to Telegram:', error);
      throw error;
    }
  }
} 