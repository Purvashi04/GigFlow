import Gig from "./models/Gig.js";

export const createGig = async (req, res) => {
  const gig = await Gig.create({ ...req.body, ownerId: req.user.id });
  res.json(gig);
};

export const getGigs = async (req, res) => {
  const query = req.query.search
    ? { title: { $regex: req.query.search, $options: "i" } }
    : {};
  const gigs = await Gig.find({ status: "open", ...query });
  res.json(gigs);
};
