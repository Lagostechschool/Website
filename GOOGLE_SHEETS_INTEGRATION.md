
# Google Sheets Form Integration Guide

This guide explains how to connect your form to Google Sheets to collect submissions.

## Option 1: Using Make.com (formerly Integromat)

1. **Sign up for [Make.com](https://www.make.com/)** (they have a free plan)
2. **Create a new scenario**:
   - Start with a Webhook module
   - Select "Custom Webhook"
   - Create a webhook and copy the URL
3. **Add a Google Sheets module**:
   - Connect to your Google account
   - Select "Add a Row" action
   - Choose the spreadsheet and worksheet
   - Map the form fields to the columns in your sheet
4. **Paste the webhook URL** into your form's admin settings section

## Option 2: Using Zapier

1. **Sign up for [Zapier](https://zapier.com/)** (they have a free plan)
2. **Create a new Zap**:
   - Start with a Webhook trigger
   - Select "Catch Hook"
   - Create a webhook and copy the URL
3. **Add a Google Sheets action**:
   - Connect to your Google account
   - Select "Create Spreadsheet Row" action
   - Choose the spreadsheet and worksheet
   - Map the form fields to the columns in your sheet
4. **Paste the webhook URL** into your form's admin settings section

## Option 3: Using Google Apps Script (Advanced)

1. **Create a Google Sheet** with columns matching your form fields
2. **Go to Extensions > Apps Script**
3. **Replace the code** with the following:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  // Adjust these fields to match your form
  const row = [
    new Date(), // Timestamp
    data.fullName,
    data.email,
    data.phone,
    data.company || 'N/A',
    data.background,
    data.course
  ];
  
  sheet.appendRow(row);
  
  return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. **Deploy as Web App**:
   - Click "Deploy" > "New deployment"
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Deploy and copy the URL
5. **Paste the URL** into your form's admin settings section

## Setting Up Your Spreadsheet

Create a Google Sheet with the following column headers:
- Timestamp
- Full Name
- Email
- Phone
- Company
- Background
- Course

## Testing Your Integration

1. Fill out the form on your website
2. Check your Google Sheet to see if the submission was recorded
3. If there are issues, check the browser console for errors

## Security Notes

- The webhook URL gives access to add data to your sheet, so keep it private
- For production, hide the admin settings section or create a separate admin page
- Consider adding CAPTCHA or rate limiting to prevent spam submissions
