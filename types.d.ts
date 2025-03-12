export interface iProduct {
  _id: string;
  name: string;
  category: string;
  image: string[];
  featured: boolean;
  description: string;
  material: string;
  length: string;
  width: string;
  height: string;
  weight: string;
  instruction: string;
}

export interface iSendMail {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject: string;
}
