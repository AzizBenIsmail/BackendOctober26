
module.exports.esmFunction = (req, res) => {
  try {
    //logic
    res.status(200).json("message de reponse de la fonction exportée");
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.Hey = (req, res) => {
  try {
    const message1 = "Hello from the controller!";
    const message2 = "marhbe bik";
    const message = message1 + " " + message2;
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
