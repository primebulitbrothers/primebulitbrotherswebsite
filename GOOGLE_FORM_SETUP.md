# Google Form Integration Setup Guide

This guide will help you set up your QuoteForm and Contact form to submit data to Google Forms/Sheets.

## QuoteForm Setup

### Step 1: Create a Google Form for Quote Requests

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with the following fields (in this exact order):
   - First Name (Short answer)
   - Last Name (Short answer)
   - Email (Short answer)
   - Phone (Short answer)
   - Street Address (Short answer)
   - City (Short answer)
   - State (Short answer)
   - ZIP Code (Short answer)
   - Service Type (Multiple choice)
   - Project Description (Long answer)
   - Timeline (Multiple choice)
   - Budget Range (Multiple choice)
   - How did you hear about us? (Short answer)

### Step 2: Get the Form Submission URL

1. In your Google Form, click the "Send" button
2. Click on the link icon (🔗)
3. Copy the form URL
4. Replace `viewform` with `formResponse` in the URL
   - Example: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform`
   - Becomes: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse`

### Step 3: Get Field IDs

1. Open your Google Form in a web browser
2. Right-click and "View Page Source"
3. Search for `entry.` to find the field IDs
4. Note down each field ID for each question

### Step 4: Update the QuoteForm Component

Replace the placeholder values in `src/components/QuoteForm.jsx`:

```javascript
// Replace this line:
const googleFormUrl = 'YOUR_GOOGLE_FORM_SUBMISSION_URL_HERE'

// With your actual form URL:
const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse'
```

Then replace the field IDs with your actual field IDs:

```javascript
// Replace these with your actual field IDs:
formDataToSubmit.append('entry.123456789', formData.firstName) // Replace 123456789
formDataToSubmit.append('entry.987654321', formData.lastName) // Replace 987654321
// ... continue for all fields
```

## Contact Form Setup

### Step 1: Create a Google Form for Contact Messages

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form with the following fields (in this exact order):
   - Name (Short answer)
   - Email (Short answer)
   - Phone (Short answer)
   - Subject (Short answer)
   - Message (Long answer)

### Step 2: Get the Form Submission URL

1. In your Google Form, click the "Send" button
2. Click on the link icon (🔗)
3. Copy the form URL
4. Replace `viewform` with `formResponse` in the URL
   - Example: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform`
   - Becomes: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse`

### Step 3: Get Field IDs

1. Open your Google Form in a web browser
2. Right-click and "View Page Source"
3. Search for `entry.` to find the field IDs
4. Note down each field ID for each question

### Step 4: Update the Contact Component

Replace the placeholder values in `src/pages/Contact.jsx`:

```javascript
// Replace this line:
const googleFormUrl = 'YOUR_CONTACT_FORM_GOOGLE_FORM_URL_HERE'

// With your actual form URL:
const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse'
```

Then replace the field IDs with your actual field IDs:

```javascript
// Replace these with your actual field IDs:
formDataToSubmit.append('entry.123456789', formData.name) // Replace 123456789
formDataToSubmit.append('entry.987654321', formData.email) // Replace 987654321
formDataToSubmit.append('entry.111111111', formData.phone) // Replace 111111111
formDataToSubmit.append('entry.222222222', formData.subject) // Replace 222222222
formDataToSubmit.append('entry.333333333', formData.message) // Replace 333333333
```

## Step 5: Test the Integration

1. Fill out both forms on your website
2. Submit the forms
3. Check your Google Sheets (linked to the forms) to see if the data appears
4. Check the browser console for any errors

## Troubleshooting

### Common Issues:

1. **CORS Errors**: The `mode: 'no-cors'` setting should handle this
2. **Field ID Mismatch**: Make sure you're using the correct field IDs from your Google Form
3. **Form URL**: Ensure you're using the `formResponse` URL, not the `viewform` URL

### Alternative Method (If the above doesn't work):

You can also use a service like Formspree or Netlify Forms as an alternative to Google Forms.

## Security Notes

- Google Forms are public by default
- Consider adding CAPTCHA if needed
- The form data will be visible in the Google Sheets linked to your form
- Make sure to comply with data protection regulations (GDPR, etc.)

## Optional: Add Email Notifications

1. In your Google Form settings, enable email notifications
2. Set up Google Apps Script for custom email notifications
3. Configure the linked Google Sheet to send email alerts

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all field IDs are correct
3. Test with a simple form first
4. Ensure your Google Form is published and accessible
