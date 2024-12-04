import axios from "axios";

import { IContactUsForm } from "@/components/FeedbackForm/interfaces/IContactUsForm";
import { API } from "constants/index";

class SendEmailService {
  async sendEmail(data: IContactUsForm) {
    try {
      const response = await axios.post(API.EMAIL_SEND, data);

      return response.data;
    } catch (e) {
      throw e;
    }
  }
}

const sendEmailService = new SendEmailService();

export default sendEmailService;
