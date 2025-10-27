import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  // console.log(req.headers.token, req.body, req.header, process.env.RAZORPAY_KEY_ID,
  //   process.env.RAZORPAY_KEY_SECRET,);

  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized. Login again.",
    });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if(!tokenDecode)
      return res.json({success:false,message:"User not authrozied"})

    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
    } else {
      res.json({ success: false, message: "Not authorized. Login again." });
    }

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
