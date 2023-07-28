const express = require("express");
const router = express.Router();

const {
  getContact,
  getContactId,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.route("/").post(createContact).get(getContact);
router.route("/:id").get(getContactId).put(updateContact).delete(deleteContact);

module.exports = router;

/*or can be written in this form also
// router.route("/").get(getContact);
// router.route("/:id").get(getContactId);
// router.route("/").post(createContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);
*/
