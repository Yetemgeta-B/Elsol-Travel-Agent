import emailjs from '@emailjs/browser';

export class EmailService {
  private static readonly SERVICE_ID = 'service_xusfolm'; // Replace with your EmailJS service ID
  private static readonly TEMPLATE_ID = 'template_8f3flet'; // Replace with your EmailJS template ID
  private static readonly PUBLIC_KEY = 'rRo4a0GFgxRyl7xEg'; // Replace with your EmailJS public key

  static async sendEmail(data: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) {
    try {
      const templateParams = {
        to_email: 'yetemgetabekele@gmail.com',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        subject: data.subject,
        message: data.message,
      };

      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.PUBLIC_KEY
      );

      return response;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}
