import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { ClmLoanApplication } from '../entities/clm-loan-application.entity';
import { ClmIndividualCustomer } from '../entities/clm-individual-customer.entity';
import { ClmCoApplicant } from '../entities/clm-co-applicant.entity';
import { ClmEntityCustomer } from '../entities/clm-entity-customer.entity';
import { ClmCollateral } from '../entities/clm-collateral.entity';
import { ClmDisbursement } from '../entities/clm-disbursement.entity';
import { ClmDocument } from '../entities/clm-document.entity';

import { SfdcIngestRequestDto, SfdcRecordDto } from './dto/sfdc-ingest-request.dto';
import { SfdcIngestFailureDto, SfdcIngestResponseDto } from './dto/sfdc-ingest-response.dto';

@Injectable()
export class SfdcIngestService {
  private readonly logger = new Logger(SfdcIngestService.name);

  constructor(
    @InjectRepository(ClmLoanApplication)
    private readonly loanApplicationRepo: Repository<ClmLoanApplication>,
    @InjectRepository(ClmIndividualCustomer)
    private readonly individualCustomerRepo: Repository<ClmIndividualCustomer>,
    @InjectRepository(ClmCoApplicant)
    private readonly coApplicantRepo: Repository<ClmCoApplicant>,
    @InjectRepository(ClmEntityCustomer)
    private readonly entityCustomerRepo: Repository<ClmEntityCustomer>,
    @InjectRepository(ClmCollateral)
    private readonly collateralRepo: Repository<ClmCollateral>,
    @InjectRepository(ClmDisbursement)
    private readonly disbursementRepo: Repository<ClmDisbursement>,
    @InjectRepository(ClmDocument)
    private readonly documentRepo: Repository<ClmDocument>,
    private readonly dataSource: DataSource,
  ) {}

  async ingest(dto: SfdcIngestRequestDto): Promise<SfdcIngestResponseDto> {
    const failures: SfdcIngestFailureDto[] = [];
    let recordsAdded = 0;

    for (let i = 0; i < dto.records.length; i++) {
      const record = dto.records[i];
      const lan = record.loanDetails.loanApplicationNoLan;
      try {
        await this.persistRecord(record, dto.partnerCode ?? 'SFDC');
        recordsAdded++;
      } catch (err) {
        this.logger.error(`Failed record[${i}] LAN=${lan}: ${err.message}`, err.stack);
        failures.push({ recordIndex: i, loanApplicationNoLan: lan, error: err.message });
      }
    }

    return {
      success: failures.length === 0,
      recordsReceived: dto.records.length,
      recordsAdded,
      recordsFailed: failures.length,
      failures,
    };
  }

  private async persistRecord(record: SfdcRecordDto, createdBy: string): Promise<void> {
    await this.dataSource.transaction(async (manager) => {
      const lan = record.loanDetails.loanApplicationNoLan;

      // 1. Individual Customer — must be first so CIF exists before loan application references it
      const ic = manager.create(ClmIndividualCustomer, {
        customerIdCif: record.individualApplicant.customerIdCif,
        customerType: record.individualApplicant.customerType,
        salutation: record.individualApplicant.salutation ?? null,
        firstName: record.individualApplicant.firstName,
        middleName: record.individualApplicant.middleName ?? null,
        lastName: record.individualApplicant.lastName,
        dateOfBirth: new Date(record.individualApplicant.dateOfBirth),
        gender: record.individualApplicant.gender,
        nationality: record.individualApplicant.nationality,
        citizenship: record.individualApplicant.citizenship,
        residentialStatus: record.individualApplicant.residentialStatus,
        fatherFirstName: record.individualApplicant.fatherFirstName,
        fatherMiddleName: record.individualApplicant.fatherMiddleName ?? null,
        fatherLastName: record.individualApplicant.fatherLastName,
        motherFirstName: record.individualApplicant.motherFirstName,
        motherMiddleName: record.individualApplicant.motherMiddleName ?? null,
        motherLastName: record.individualApplicant.motherLastName,
        maritalStatus: record.individualApplicant.maritalStatus,
        spouseFirstName: record.individualApplicant.spouseFirstName ?? null,
        spouseMiddleName: record.individualApplicant.spouseMiddleName ?? null,
        spouseLastName: record.individualApplicant.spouseLastName ?? null,
        religion: record.individualApplicant.religion ?? null,
        casteCategory: record.individualApplicant.casteCategory ?? null,
        disability: record.individualApplicant.disability ?? null,
        education: record.individualApplicant.education ?? null,
        qualification: record.individualApplicant.qualification ?? null,
        pan: record.individualApplicant.pan,
        panVerifiedFlag: record.individualApplicant.panVerifiedFlag,
        aadhaarLast4: record.individualApplicant.aadhaarLast4,
        aadhaarVerifiedFlag: record.individualApplicant.aadhaarVerifiedFlag,
        ckycStatus: record.individualApplicant.ckycStatus,
        mnrlCheckStatus: record.individualApplicant.mnrlCheckStatus,
        dedupeCheckFlag: record.individualApplicant.dedupeCheckFlag,
        externalDedupeCheckStatus: record.individualApplicant.externalDedupeCheckStatus,
        kycCheckFlag: record.individualApplicant.kycCheckFlag,
        kycVerificationMode: record.individualApplicant.kycVerificationMode,
        oglTag: record.individualApplicant.oglTag,
        residenceType: record.individualApplicant.residenceType,
        residenceSinceYears: record.individualApplicant.residenceSinceYears ?? null,
        addressType: record.individualApplicant.addressType,
        blockTaluka: record.individualApplicant.blockTaluka ?? null,
        currentAddressLine1: record.individualApplicant.currentAddressLine1,
        currentAddressLine2: record.individualApplicant.currentAddressLine2 ?? null,
        currentAddressLine3: record.individualApplicant.currentAddressLine3 ?? null,
        currentAddressCity: record.individualApplicant.currentAddressCity,
        currentAddressPin: record.individualApplicant.currentAddressPin,
        currentAddressState: record.individualApplicant.currentAddressState,
        sameAsCurrentAddress: record.individualApplicant.sameAsCurrentAddress ?? null,
        permanentAddressLine1: record.individualApplicant.permanentAddressLine1,
        permanentAddressLine2: record.individualApplicant.permanentAddressLine2 ?? null,
        permanentAddressLine3: record.individualApplicant.permanentAddressLine3 ?? null,
        permanentAddressCity: record.individualApplicant.permanentAddressCity,
        permanentAddressPin: record.individualApplicant.permanentAddressPin,
        permanentAddressState: record.individualApplicant.permanentAddressState,
        addressProofType: record.individualApplicant.addressProofType,
        mobileNumber: record.individualApplicant.mobileNumber,
        emailId: record.individualApplicant.emailId,
        alternateEmailId: record.individualApplicant.alternateEmailId ?? null,
        occupation: record.individualApplicant.occupation,
        occupationCategory: record.individualApplicant.occupationCategory,
        annualIncomeRs: String(record.individualApplicant.annualIncomeRs),
        employmentType: record.individualApplicant.employmentType,
        employerName: record.individualApplicant.employerName,
        employerType: record.individualApplicant.employerType,
        employerIndustry: record.individualApplicant.employerIndustry,
        designation: record.individualApplicant.designation,
        profession: record.individualApplicant.profession,
        employeeId: record.individualApplicant.employeeId,
        employmentStartDate: new Date(record.individualApplicant.employmentStartDate),
        currentWorkExpYears: record.individualApplicant.currentWorkExpYears,
        currentWorkExpMonths: record.individualApplicant.currentWorkExpMonths,
        totalWorkExpYears: record.individualApplicant.totalWorkExpYears,
        totalWorkExpMonths: record.individualApplicant.totalWorkExpMonths,
        workEmail: record.individualApplicant.workEmail ?? null,
        workEmailOtpVerified: record.individualApplicant.workEmailOtpVerified ?? null,
        monthlyIncomeRs: String(record.individualApplicant.monthlyIncomeRs),
        incomeProofType: record.individualApplicant.incomeProofType,
        bankAccountNumber: record.individualApplicant.bankAccountNumber,
        bankIfscCode: record.individualApplicant.bankIfscCode,
        pennyDropStatus: record.individualApplicant.pennyDropStatus,
        pennyDropTriggeredFlag: record.individualApplicant.pennyDropTriggeredFlag,
        bureauAboveThreshold: record.individualApplicant.bureauAboveThreshold,
        cibilTriggerFlag: record.individualApplicant.cibilTriggerFlag,
        cibilScore: record.individualApplicant.cibilScore,
        cibilPullDate: new Date(record.individualApplicant.cibilPullDate),
        bureauConsentFlag: record.individualApplicant.bureauConsentFlag,
        bureauConsentTimestamp: new Date(record.individualApplicant.bureauConsentTimestamp),
        foirCurrentPct: String(record.individualApplicant.foirCurrentPct),
        foirPostEmiPct: String(record.individualApplicant.foirPostEmiPct),
        pepFlag: record.individualApplicant.pepFlag,
        customerRiskCategory: record.individualApplicant.customerRiskCategory,
        dedupStatus: record.individualApplicant.dedupStatus,
        kycStatus: record.individualApplicant.kycStatus,
        kycExpiryDate: new Date(record.individualApplicant.kycExpiryDate),
        negativeListCheckStatus: record.individualApplicant.negativeListCheckStatus,
        dataConsentTimestamp: new Date(record.individualApplicant.dataConsentTimestamp),
        dataConsentIpAddress: record.individualApplicant.dataConsentIpAddress,
        dataConsentUserAgent: record.individualApplicant.dataConsentUserAgent,
        createdBy,
        updatedBy: createdBy,
      });
      await manager.save(ClmIndividualCustomer, ic);

      // 2. Entity Customer (optional)
      if (record.entityApplicant) {
        const ea = record.entityApplicant;
        const ec = manager.create(ClmEntityCustomer, {
          customerIdCif: ea.customerIdCif,
          customerType: ea.customerType,
          entityLegalName: ea.entityLegalName,
          entityType: ea.entityType,
          dateOfIncorporation: new Date(ea.dateOfIncorporation),
          businessIndustry: ea.businessIndustry,
          natureOfBusiness: ea.natureOfBusiness,
          businessVintage: ea.businessVintage,
          cinLlpin: ea.cinLlpin,
          panEntity: ea.panEntity,
          panApiCheckFlag: ea.panApiCheckFlag,
          registrationNumber: ea.registrationNumber,
          gstIn: ea.gstIn,
          gstExempt: ea.gstExempt,
          udyamRegistrationNo: ea.udyamRegistrationNo,
          udyamCheckFlag: ea.udyamCheckFlag,
          pslCategoryEntity: ea.pslCategoryEntity,
          officeOwnershipType: ea.officeOwnershipType,
          businessAddressCity: ea.businessAddressCity,
          businessAddressPin: ea.businessAddressPin,
          businessAddressState: ea.businessAddressState,
          businessAddressType: ea.businessAddressType,
          nicBusinessActivityCode: ea.nicBusinessActivityCode,
          annualTurnoverCr: String(ea.annualTurnoverCr),
          shareholderName: ea.shareholderName ?? null,
          shareholderStakePct: ea.shareholderStakePct ? String(ea.shareholderStakePct) : null,
          authSignatoryFirstName: ea.authSignatoryFirstName,
          authSignatoryMiddleName: ea.authSignatoryMiddleName ?? null,
          authSignatoryLastName: ea.authSignatoryLastName,
          authSignatoryPan: ea.authSignatoryPan,
          directorPan: ea.directorPan,
          directorDin: ea.directorDin,
          directorName: ea.directorName,
          directorStakePct: String(ea.directorStakePct),
          uboName: ea.uboName,
          uboStakePct: String(ea.uboStakePct),
          uboPan: ea.uboPan,
          amlCheckFlag: ea.amlCheckFlag,
          amlCheckStatus: ea.amlCheckStatus,
          cibilCmrScore: ea.cibilCmrScore,
          entityBankAccountNumber: ea.entityBankAccountNumber,
          entityBankIfscCode: ea.entityBankIfscCode,
          negativeListAmlStatus: ea.negativeListAmlStatus,
          shareholdingRatioPct: String(ea.shareholdingRatioPct),
          createdBy,
          updatedBy: createdBy,
        });
        await manager.save(ClmEntityCustomer, ec);
      }

      // 3. Loan Application
      const ld = record.loanDetails;
      const la = manager.create(ClmLoanApplication, {
        loanApplicationNoLan: ld.loanApplicationNoLan,
        clrId: ld.clrId,
        applicationRequestDate: new Date(ld.applicationRequestDate),
        applicationChannel: ld.applicationChannel,
        sourcingBranch: ld.sourcingBranch,
        loanBranch: ld.loanBranch,
        directSalesAgent: ld.directSalesAgent ?? null,
        productVariant: ld.productVariant,
        repaymentVariant: ld.repaymentVariant ?? null,
        loanFacilityType: ld.loanFacilityType,
        requestedLoanAmountRs: String(ld.requestedLoanAmountRs),
        requestedTenorMonths: ld.requestedTenorMonths,
        noOfApplicants: ld.noOfApplicants,
        applicantCifId: ld.applicantCifId,
        coApplicantCifId: ld.coApplicantCifId ?? null,
        guarantorCifId: ld.guarantorCifId ?? null,
        loanPurpose: ld.loanPurpose,
        endUseMonitoringRequired: ld.endUseMonitoringRequired,
        pslCategory: ld.pslCategory,
        pslSubCode: ld.pslSubCode,
        pslCategorySubCode: ld.pslCategorySubCode,
        interestRateType: ld.interestRateType,
        actualInterestRatePct: String(ld.actualInterestRatePct),
        paymentFrequency: ld.paymentFrequency,
        stpStatus: ld.stpStatus,
        coLendingRatioDisplay: ld.coLendingRatioDisplay,
        sanctionedAmountRs: String(ld.sanctionedAmountRs),
        sanctionedTenorMonths: ld.sanctionedTenorMonths,
        totalFinanceAmountRs: String(ld.totalFinanceAmountRs),
        finalRoiPct: String(ld.finalRoiPct),
        totalFeeRs: String(ld.totalFeeRs),
        emiAmountRs: String(ld.emiAmountRs),
        firstDisbursementAmountRs: String(ld.firstDisbursementAmountRs),
        loanStartDate: new Date(ld.loanStartDate),
        sanctionDate: new Date(ld.sanctionDate),
        sanctionExpiryDate: new Date(ld.sanctionExpiryDate),
        applicationStage: ld.applicationStage ?? null,
        assignedUnderwriterId: ld.assignedUnderwriterId ?? null,
        assignedUnderwriterName: ld.assignedUnderwriterName ?? null,
        underwriterTatDays: ld.underwriterTatDays ?? null,
        deviationFlag: ld.deviationFlag ?? null,
        deviationDescription: ld.deviationDescription ?? null,
        deviationApproverId: ld.deviationApproverId ?? null,
        deviationApproverName: ld.deviationApproverName ?? null,
        camId: ld.camId ?? null,
        sanctionAuthorityLevel: ld.sanctionAuthorityLevel ?? null,
        sanctionedByBankUserId: ld.sanctionedByBankUserId,
        sanctionedByBankName: ld.sanctionedByBankName,
        sanctionedByBankDate: new Date(ld.sanctionedByBankDate),
        sanctionedByNbfcUserId: ld.sanctionedByNbfcUserId,
        sanctionedByNbfcName: ld.sanctionedByNbfcName,
        sanctionedByNbfcDate: new Date(ld.sanctionedByNbfcDate),
        customerAcceptanceTimestamp: new Date(ld.customerAcceptanceTimestamp),
        sanctionLetterDispatchMode: ld.sanctionLetterDispatchMode,
        smaClassificationAtOrigination: ld.smaClassificationAtOrigination,
        loanReferenceNumber: ld.loanReferenceNumber ?? null,
        createdBy,
        updatedBy: createdBy,
      });
      await manager.save(ClmLoanApplication, la);

      // 4. Co-Applicants (optional, multiple)
      if (record.coApplicants?.length) {
        for (const ca of record.coApplicants) {
          const coAppl = manager.create(ClmCoApplicant, {
            coApplicantId: ca.coApplicantId,
            loanApplicationNoLan: lan,
            coApplicantCategory: ca.coApplicantCategory,
            coApplicantType: ca.coApplicantType,
            isFinancial: ca.isFinancial,
            keyApplicantFlag: ca.keyApplicantFlag,
            relationshipWithPrimary: ca.relationshipWithPrimary,
            salutation: ca.salutation ?? null,
            firstName: ca.firstName,
            middleName: ca.middleName ?? null,
            lastName: ca.lastName,
            pan: null,
            aadhaarLast4: ca.aadhaarLast4 ?? null,
            dateOfBirth: new Date(ca.dateOfBirth),
            gender: ca.coApplGender,
            nationality: ca.coApplNationality,
            citizenship: ca.coApplCitizenship,
            fatherFirstName: ca.fatherFirstName,
            fatherMiddleName: ca.fatherMiddleName ?? null,
            fatherLastName: ca.fatherLastName,
            motherFirstName: ca.motherFirstName,
            motherMiddleName: ca.motherMiddleName ?? null,
            motherLastName: ca.motherLastName,
            maritalStatus: ca.maritalStatus,
            spouseFirstName: ca.spouseFirstName ?? null,
            spouseMiddleName: ca.spouseMiddleName ?? null,
            spouseLastName: ca.spouseLastName ?? null,
            mobileNumber: ca.mobileNumber,
            primaryEmail: ca.primaryEmail,
            alternateEmail: ca.alternateEmail ?? null,
            currentAddressLine1: ca.currentAddressLine1,
            currentAddressLine2: ca.currentAddressLine2 ?? null,
            currentAddressLine3: ca.currentAddressLine3 ?? null,
            currentAddressCity: ca.coApplCity,
            currentAddressPin: ca.coApplPin,
            currentAddressState: ca.coApplState,
            permanentAddressLine1: ca.permanentAddressLine1,
            permanentAddressLine2: ca.permanentAddressLine2 ?? null,
            permanentAddressLine3: ca.permanentAddressLine3 ?? null,
            permanentAddressCity: ca.permanentAddressCity,
            permanentAddressPin: ca.permanentAddressPin,
            permanentAddressState: ca.permanentAddressState,
            residenceType: ca.residenceType,
            addressType: ca.addressType,
            blockTaluka: ca.blockTaluka ?? null,
            education: ca.coApplEducation ?? null,
            qualification: ca.coApplQualification ?? null,
            universityName: ca.universityName ?? null,
            occupation: ca.coApplOccupation,
            occupationCategory: ca.occupationCategory,
            religion: ca.coApplReligion ?? null,
            casteCategory: ca.casteCategory ?? null,
            businessIndustry: ca.businessIndustry ?? null,
            businessVintage: ca.businessVintage ?? null,
            businessAddressLine1: ca.businessAddressLine1 ?? null,
            businessAddressCity: ca.businessAddressCity ?? null,
            businessAddressPin: ca.businessAddressPin ?? null,
            businessAddressState: ca.businessAddressState ?? null,
            gstin: ca.coApplGstin ?? null,
            gstExempt: ca.coApplGstExemptFlag ?? null,
            udyamRegistrationNo: ca.udyamRegistrationNo ?? null,
            officeOwnershipType: ca.officeOwnershipType ?? null,
            bureauAboveThreshold: ca.bureauAboveThreshold,
            cibilScore: ca.cibilScore,
            oglTag: ca.oglTag,
            coApplPan: ca.coApplPan,
            coApplSalutation: ca.coApplSalutation ?? null,
            coApplPin: ca.coApplPin,
            coApplState: ca.coApplState,
            coApplCity: ca.coApplCity,
            coApplGender: ca.coApplGender,
            coApplNationality: ca.coApplNationality,
            coApplCitizenship: ca.coApplCitizenship,
            coApplEducation: ca.coApplEducation ?? null,
            coApplQualification: ca.coApplQualification ?? null,
            coApplOccupation: ca.coApplOccupation,
            coApplGstin: ca.coApplGstin ?? null,
            coApplGstExemptFlag: ca.coApplGstExemptFlag ?? null,
            coApplOglTagFlag: ca.coApplOglTagFlag,
            coApplReligion: ca.coApplReligion ?? null,
            createdBy,
            updatedBy: createdBy,
          });
          await manager.save(ClmCoApplicant, coAppl);
        }
      }

      // 5. Collateral (optional)
      if (record.collateral) {
        const col = record.collateral;
        const collateral = manager.create(ClmCollateral, {
          collateralId: col.collateralId,
          loanApplicationNoLan: lan,
          propertyIdentified: col.propertyIdentified,
          apfFlag: col.apfFlag ?? null,
          propertyAddressLine1: col.propertyAddressLine1 ?? null,
          propertyAddressLine2: col.propertyAddressLine2 ?? null,
          propertyAddressLine3: col.propertyAddressLine3 ?? null,
          propertyAddressCity: col.propertyAddressCity ?? null,
          propertyAddressPin: col.propertyAddressPin ?? null,
          propertyAddressType: col.propertyAddressType ?? null,
          blockTaluka: col.blockTaluka ?? null,
          projectName: col.projectName ?? null,
          developerName: col.developerName ?? null,
          unitPropertyType: col.unitPropertyType ?? null,
          towerBuildingName: col.towerBuildingName ?? null,
          floor: col.floor ?? null,
          unitNumber: col.unitNumber ?? null,
          constructionStage: col.constructionStage ?? null,
          ownershipType: col.ownershipType ?? null,
          occupancyType: col.occupancyType ?? null,
          occupancySinceDate: col.occupancySinceDate ? new Date(col.occupancySinceDate) : null,
          propertyUsage: col.propertyUsage ?? null,
          estimatedValueRs: col.estimatedValueRs ? String(col.estimatedValueRs) : null,
          areaOfPlotSqft: col.areaOfPlotSqft ? String(col.areaOfPlotSqft) : null,
          carpetAreaSqm: col.carpetAreaSqm ? String(col.carpetAreaSqm) : null,
          reraRegistrationNo: col.reraRegistrationNo ?? null,
          gplFlag: col.gplFlag ?? null,
          propertyInsuranceFlag: col.propertyInsuranceFlag ?? null,
          lvWaiver: col.lvWaiver ?? null,
          flexiLoanFlag: col.flexiLoanFlag ?? null,
          paymentPlanType: col.paymentPlanType ?? null,
          ageOfPropertyYears: col.ageOfPropertyYears ?? null,
          noOfTenants: col.noOfTenants ?? null,
          occupiedSinceYear: col.occupiedSinceYear ? new Date(col.occupiedSinceYear) : null,
          noOfFloors: col.noOfFloors ?? null,
          collateralDedupeStatus: col.collateralDedupeStatus ?? null,
          collateralDedupeMatchScore: col.collateralDedupeMatchScore ? String(col.collateralDedupeMatchScore) : null,
          siteVisitConducted: col.siteVisitConducted ?? null,
          siteVisitProjectName: col.siteVisitProjectName ?? null,
          siteVisitPersonMet: col.siteVisitPersonMet ?? null,
          plotFlatKhasraNo: col.plotFlatKhasraNo,
          schemeColonyBuilding: col.schemeColonyBuilding,
          district: col.district,
          village: col.village ?? null,
          tehsil: col.tehsil ?? null,
          techTownCity: col.techTownCity,
          techState: col.techState,
          propertyAreaTech: col.propertyAreaTech,
          northBoundary: col.northBoundary,
          southBoundary: col.southBoundary,
          eastBoundary: col.eastBoundary,
          westBoundary: col.westBoundary,
          valuationReportType: col.valuationReportType,
          valuationUploadDate: new Date(col.valuationUploadDate),
          valuationAgency: col.valuationAgency,
          marketValueRs: String(col.marketValueRs),
          propertyDescriptionUsage: col.propertyDescriptionUsage ?? null,
          techValuationReportUrl: col.techValuationReportUrl,
          legalOpinion: col.legalOpinion,
          titleClearFlag: col.titleClearFlag,
          legalReportUrl: col.legalReportUrl,
          encumbranceCertificateDetails: col.encumbranceCertificateDetails,
          cersaiApplicationNo: col.cersaiApplicationNo,
          cersaiRegistrationDate: new Date(col.cersaiRegistrationDate),
          createdBy,
          updatedBy: createdBy,
        });
        await manager.save(ClmCollateral, collateral);
      }

      // 6. Disbursement (optional)
      if (record.disbursement) {
        const dis = record.disbursement;
        const disbursement = manager.create(ClmDisbursement, {
          dirId: dis.dirId,
          loanAccountNoLan: dis.loanAccountNoLan,
          clrId: dis.clrId,
          disbursementType: dis.disbursementType ?? null,
          trancheNumber: dis.trancheNumber ?? null,
          totalSanctionedAmountRs: String(dis.totalSanctionedAmountRs),
          disbursementAmountRs: String(dis.disbursementAmountRs),
          bankPortionAmountRs: String(dis.bankPortionAmountRs),
          nbfcPortionAmountRs: String(dis.nbfcPortionAmountRs),
          beneficiaryAccountNumber: dis.beneficiaryAccountNumber,
          beneficiaryIfscCode: dis.beneficiaryIfscCode,
          beneficiaryName: dis.beneficiaryName,
          paymentRail: dis.paymentRail,
          escrowDebitAccountNo: dis.escrowDebitAccountNo,
          utrRrnNo: dis.utrRrnNo,
          paymentStatus: dis.paymentStatus,
          makerUserId: dis.makerUserId,
          makerTimestamp: new Date(dis.makerTimestamp),
          checkerUserId: dis.checkerUserId,
          checkerTimestamp: new Date(dis.checkerTimestamp),
          nbfcRemittanceStatus: dis.nbfcRemittanceStatus,
          nbfcRemittanceUtr: dis.nbfcRemittanceUtr,
          nbfcRemittanceDate: new Date(dis.nbfcRemittanceDate),
          lmsAccountCreatedFlag: dis.lmsAccountCreatedFlag,
          firstEmiDate: new Date(dis.firstEmiDate),
          nachEcsMandateStatus: dis.nachEcsMandateStatus,
          nachUmrn: dis.nachUmrn,
          processingFeeDeductedRs: String(dis.processingFeeDeductedRs),
          insuranceDeductedRs: String(dis.insuranceDeductedRs),
          netAmountToCustomerRs: String(dis.netAmountToCustomerRs),
          idempotencyKey: dis.idempotencyKey ?? null,
          marginPct: String(dis.marginPct),
          finalRatePct: String(dis.finalRatePct),
          scheduleMethod: dis.scheduleMethod,
          interestFrequency: dis.interestFrequency,
          numberOfInstruments: dis.numberOfInstruments ?? null,
          createdBy,
          updatedBy: createdBy,
        });
        await manager.save(ClmDisbursement, disbursement);
      }

      // 7. Documents (optional, array)
      if (record.documents?.length) {
        for (const doc of record.documents) {
          const document = manager.create(ClmDocument, {
            documentId: doc.documentId,
            loanApplicationNoLan: lan,
            customerIdCif: doc.customerIdCif,
            documentCategory: doc.documentCategory,
            documentSubType: doc.documentSubType,
            documentOwnerRole: doc.documentOwnerRole,
            filePath: doc.filePath,
            fileFormat: doc.fileFormat,
            uploadTimestamp: new Date(doc.uploadTimestamp),
            uploadedByUserId: doc.uploadedByUserId,
            documentSource: doc.documentSource,
            isMandatory: doc.isMandatory,
            verificationStatus: doc.verificationStatus,
            verifiedByUserId: doc.verifiedByUserId ?? null,
            verifiedOnDate: doc.verifiedOnDate ? new Date(doc.verifiedOnDate) : null,
            rejectionReason: doc.rejectionReason ?? null,
            documentValidityDate: doc.documentValidityDate ? new Date(doc.documentValidityDate) : null,
            panDocRef: doc.panDocRef,
            passportDocRef: doc.passportDocRef ?? null,
            voterIdDocRef: doc.voterIdDocRef ?? null,
            drivingLicenseDocRef: doc.drivingLicenseDocRef ?? null,
            incomeDocSalariedRef: doc.incomeDocSalariedRef,
            bankStatementDocRef: doc.bankStatementDocRef,
            incomeDocSelfEmpRef: doc.incomeDocSelfEmpRef,
            approvedPlanNocRef: doc.approvedPlanNocRef ?? null,
            createdBy,
            updatedBy: createdBy,
          });
          await manager.save(ClmDocument, document);
        }
      }

    });
  }
}
