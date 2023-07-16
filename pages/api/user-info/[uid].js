const handlerUid = (req, res) => {
  const { uid } = req.query;
  const { cookies } = req;
  // res
  //   .status(200)
  //   .json({ name: `Drew-Choi ${uid} ${JSON.stringify(cookies.test)}` });
  res.redirect(307, '/api/user');
};

export default handlerUid;
