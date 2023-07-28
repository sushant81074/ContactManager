const asyncHandler = require("express-async-handler");
const Contact = require("../database/schema");
// desc
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).send(contacts);
});

const getContactId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404).json({ message: "Contact Not Found" });
  } else {
    res.status(200).send(contact);
  }
});

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone, id } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error();
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  console.log(contact);
  res.status(201).send(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // const contact = Contact.findById({ id });
  // if (!contact) res.status(404).send({ message: "Contact Not Found" });
  // const updatedContact = Contact.findByIdAndUpdate(id, req.body, { new: true });
  res.status(201).send(id);
});

const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const contact = await Contact.findById(id);
  console.log("this is the contact : ==>");
  console.log(contact);
  if (!contact) {
    res.status(404).send({ message: "Contact Not Found" });
    throw new Error();
  }
  await Contact.deleteOne({ id });
  res.status(201).send(contact + "contact deleted");
});

module.exports = {
  getContact,
  getContactId,
  createContact,
  updateContact,
  deleteContact,
};
