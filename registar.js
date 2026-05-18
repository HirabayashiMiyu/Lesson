if (req.body.age < 18) {
  return res.status(400).json({ error: "Underage" });
}
