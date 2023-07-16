import { userDetail } from '@/constants/userDetail';

const handler = (req, res) => {
  res.status(200).json(userDetail);
};

export default handler;
