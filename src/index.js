const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const accountingRouter = require('./routes/accounting');
const paymentLinksRouter = require('./routes/paymentLinks');
const paymentMethodsRouter = require('./routes/paymentMethods');
const auditLogsRouter = require('./routes/auditLogs');
const dataExportsRouter = require('./routes/dataExports');
const filesRouter = require('./routes/files');
const mailTemplatesRouter = require('./routes/mailTemplates');
const mailboxDomainsRouter = require('./routes/mailboxDomains');
const mailboxesRouter = require('./routes/mailboxes');
const documentTemplatesRouter = require('./routes/documentTemplates');
const textTemplatesRouter = require('./routes/textTemplates');

const app = express();

app.use(express.json());

// Routes
app.use('/accounting', accountingRouter);
app.use('/payment-links', paymentLinksRouter);
app.use('/entities', paymentMethodsRouter);
app.use('/audit-logs', auditLogsRouter);
app.use('/data-exports', dataExportsRouter);
app.use('/files', filesRouter);
app.use('/mail-templates', mailTemplatesRouter);
app.use('/mailbox-domains', mailboxDomainsRouter);
app.use('/mailboxes', mailboxesRouter);
app.use('/document-templates', documentTemplatesRouter);
app.use('/text-templates', textTemplatesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});