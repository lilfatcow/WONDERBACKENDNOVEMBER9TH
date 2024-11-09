const express = require('express');
const { 
  getPayables,
  getPayableById,
  getReceivables,
  getReceivableById,
  getSyncedRecords,
  getSyncedRecordById,
  pushSyncedRecord,
  getTaxRates,
  getTaxRateById,
  getLedgerAccounts,
  getLedgerAccountById
} = require('../controllers/accounting');

const router = express.Router();

// Payables routes
router.get('/payables', getPayables);
router.get('/payables/:payableId', getPayableById);

// Receivables routes
router.get('/receivables', getReceivables);
router.get('/receivables/:invoiceId', getReceivableById);

// Synced records routes
router.get('/accounting_synced_records', getSyncedRecords);
router.get('/accounting_synced_records/:syncedRecordId', getSyncedRecordById);
router.post('/accounting_synced_records/:syncedRecordId/push', pushSyncedRecord);

// Tax rates routes
router.get('/accounting_tax_rates', getTaxRates);
router.get('/accounting_tax_rates/:taxRateId', getTaxRateById);

// Ledger accounts routes
router.get('/ledger_accounts', getLedgerAccounts);
router.get('/ledger_accounts/:ledgerAccountId', getLedgerAccountById);

module.exports = router;