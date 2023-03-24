const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
const User = require('../models/userModel');

//  @desc     Get contacts
//  @route    GET /api/contacts
//  @access   Private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
//  @desc     Set contact
//  @route    POST /api/contacts
//  @access   Private
const setContact = asyncHandler(async (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(400);
    throw new Error('Please add all fields.');
  }
  console.log(req.body);
  const contact = await Contact.create({
    user: req.user.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress,
    company: req.body.company,
    jobTitle: req.body.jobTitle,
  });

  res.status(200).json(contact);
});

//  @desc     Update contact
//  @route    PUT /api/contacts/:id
//  @access   Private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  // console.log(req.params.id);
  // console.log(contact);
  if (!contact) {
    res.status(400);
    throw new Error('Contact not found.');
  }

  if (!req.user) {
    res.status(401);
    throw new Error('User not found.');
  }

  if (contact.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized.');
  }

  // const { _id, user, firstName, lastName, phoneNumber }
  console.log(req.body);
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  console.log(updatedContact);
  res.status(200).json(updatedContact);
});

//  @desc     Delete contact
//  @route    DELETE /api/contact/:id
//  @access   Private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(400);
    throw new Error('Contact not found.');
  }

  if (!req.user) {
    res.status(401);
    throw new Error('User not found.');
  }

  if (contact.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized.');
  }

  await contact.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getContacts,
  setContact,
  updateContact,
  deleteContact,
};
