import { Bill } from '../models/bill.model';
import { BillCharge } from '../models/bill-charge.model';
import { Client } from './client.model ';
import { ReceiverDetail } from './receiver-detail.model';
import { BillTaxDetail } from './bill-tax-detail.model';
import { BillLateFeeDetail } from './bill-late-fee-detail.model';
import { CreditNote } from './credit-note.model';
import { BillDiscount } from './bill-discount.model';
import { NotificationLog } from '../../notificatoin-logs/notification-log.model';
import { InvoiceTitle } from './invoice-title.model';


export class BillMaster {
    id?: number;
    invoiceId?: string;
    billNumber?: string;
    billDate?: Date;
    billDateLocal?: string;
    fromDate?: Date;
    fromDateLocal?: string;
    toDate?: Date;
    toDateLocal?: string;
    billAmount?: number;
    billAmountLocal?: string;
    clientId?: number;
    unitId?: number;
    ownerId?: number;
    billPeriod?: number;
    billSettingsId?: number;
    dueDate?: Date;
    dueDateLocal?: string;
    unitNumber?: string;
    meterId?: number;
    previousReading?: number;
    presentReading?: number;
    formulaId?: number;
    formula?: string;
    consumptionRate?: number;
    remarks?: string;
    billPeriodId?: number;
    utilityTypeId?: number;
    billFormat?: string;
    consumption?: number;
    billTypeId?: number;
    billFormatId?: number;
    buildingName?: string;
    ownerName?: string;
    bills?: Bill[];
    billCharges?: BillCharge[];
    toPay?: number;
    paid?: number;
    toPayLocal?: string;
    paidLocal?: string;
    entityType?: string;
    email?: string;
    isWhatsappSent?: boolean;
    isSMSSent?: boolean;
    isEmailSent?: boolean;
    accountNumber?: string;
    cancelRemarks?: string;
    clientName?: string;
    trn?: string;
    mobile?: string;
    previousDueAmount?: number;
    previousDueAmountLocal?: string;
    isBillFailed?: boolean;
    contractId?: number;
    paymentId?: number;
    refundId?: number;
    isSynced?: boolean;
    client?: Client;
    isApproved?: boolean;
    approvedUser?: string;
    isRejected?: boolean;
    rejectedUser?: string;
    rejectedRemarks?: string;
    type?: string;
    status?: string;
    vat?: number;
    creditNoteAmount?: number;
    creditNoteAmountLocal?: string;
    netAmount?: number;
    vatAccountHeadId?: number;
    netAmountLocal?: string;
    balanceAmount?: number;
    balanceAmountLocal?: string;
    penaltyAfter?: number;
    receiverDetails?: ReceiverDetail[];
    penalityDate?: Date;
    userId?: string;
    isGroupBill?: boolean;
    isLatestBill?: boolean;
    billTaxDetails?: BillTaxDetail[]
    billLateFeeDetails?: BillLateFeeDetail[];
    contractNotExist?: boolean;
    creditNotes?: CreditNote[];
    billDiscounts?: BillDiscount[];
    notificationLogs?: NotificationLog[];
    currency?: string;
    invoiceTitles?: InvoiceTitle[];
}