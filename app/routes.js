const express = require('express')
const router = express.Router()
var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

// Add your routes here - above the module.exports line

router.post('/lead-inspector/planning-call', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let call = req.session.data['planning-call-made'] == "yes"

  if (call) {
    res.redirect('/lead-inspector/upload-planning-document')
  } else {
    res.redirect('/lead-inspector/12345')
  }
})
//ISA 
router.post('/inspection-support-administrator/email-notification', function (req, res) {
  let emailNotification = req.session.data['emailNotification'];
  if (emailNotification === "yes") {
    res.redirect("/inspection-support-administrator/yes-letter-preview");
  } else {
    res.redirect("/inspection-support-administrator/no-letter-preview");
  }

})
//ISA 
router.post('/inspection-support-administrator/send-draft-report-factual-accuracy-check', function (req, res) {
  let sendDraftFac = req.session.data['sendDraftFac'];
  if (sendDraftFac === "Report") {
    res.redirect("/inspection-support-administrator/report-preview");
  } else {
    res.redirect("/inspection-support-administrator/cover-letter-preview");
  }

})

router.post('/lead-inspector/upload-planning-document', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'b72b1463-f969-472d-a9ee-c01ab05429f4',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.session.data['email']
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('task-list');

});

module.exports = router
