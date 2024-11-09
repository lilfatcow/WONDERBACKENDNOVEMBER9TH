const express = require('express');
const { getAuditLogs, getAuditLogById } = require('../controllers/auditLogs');

const router = express.Router();

router.get('/', getAuditLogs);
router.get('/:logId', getAuditLogById);

module.exports = router;