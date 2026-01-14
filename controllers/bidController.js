import Bid from "./models/Bid.js";
import Gig from "./models/Gig.js";

export const placeBid = async (req, res) => {
  const bid = await Bid.create({
    ...req.body,
    freelancerId: req.user.id,
  });
  res.json(bid);
};

export const hireBid = async (req, res) => {
  const bid = await Bid.findById(req.params.bidId);
  const gig = await Gig.findById(bid.gigId);

  if (gig.status === "assigned")
    return res.status(400).json({ message: "Already hired" });

  gig.status = "assigned";
  await gig.save();

  await Bid.updateMany({ gigId: gig._id }, { status: "rejected" });
  bid.status = "hired";
  await bid.save();

  res.json({ message: "Freelancer hired" });
};
