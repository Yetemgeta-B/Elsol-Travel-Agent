import emailjs from '@emailjs/browser';

export class EmailService {
  private static readonly SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  private static readonly TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  private static readonly PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
