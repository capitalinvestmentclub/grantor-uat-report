window.ADMIN_UAT = {
  scenarios: [
    ['GRT-001','PASS','Grant capability access and actor isolation','Owned, applied and invited states plus actor separation passed'],
    ['GRT-002','FAIL','Grant list search, filters and empty states','Exact visible-title search returned no result'],
    ['GRT-003','FAIL','Draft creation, validation and persistence','Blank first step advances; saved configuration drifts'],
    ['GRT-004','FAIL','Grant type, eligibility and organization boundary','Complete organization and eligibility matrix is not all-pass'],
    ['GRT-005','FAIL','Custom eligibility questions and rules','Required answers missing; saved rules disappear'],
    ['GRT-006','PASS','Currency, amounts and funding thresholds','USD/NGN and funded totals reconcile'],
    ['GRT-007','FAIL','Co-grantor invitation and delivery','Invitation clipping and invalid email CTA certificate'],
    ['GRT-008','PASS','Invitation acceptance, decline and replay','Lifecycle and closed-invitation denial covered'],
    ['GRT-009','PASS','Even split contribution limits','$33.33 and 33.33% reconcile'],
    ['GRT-010','FAIL','Flexible funding and cross-currency shortfall','Persistence and retry matrix incomplete'],
    ['GRT-011','FAIL','Public page editing and publication','Closed grant still exposes Apply; dates drift'],
    ['GRT-012','PASS','Application receipt, filtering and privacy','Applicant identity and private-note separation passed'],
    ['GRT-013','PASS','Application chat, unread and attachments','Discussion/message delivery and typed inputs covered'],
    ['GRT-014','FAIL','Voting quorum, approval and rejection','Voting text collapses; state remains stale'],
    ['GRT-015','PASS','Direct decisions, feedback and correction','Approve, withdraw, resubmit and reject covered'],
    ['GRT-016','FAIL','Agreement gates and overdue recovery','External signature and recovery chain incomplete'],
    ['GRT-017','FAIL','Disbursement success, failure and retry','Receipt reverses sender and recipient'],
    ['GRT-018','FAIL','Wallet reconciliation and export','Refund and receipt reconciliation fail'],
    ['GRT-019','FAIL','Closing extension and application cutoff','Closed UI exposes Apply and dates drift'],
    ['GRT-020','FAIL','Termination and closed communication','Terminal prompts conflict; balance remains nonzero'],
    ['GRT-021','FAIL','Reporting, feedback due and token recovery','Tracking-off detail conflicts with monthly schedule'],
    ['GRT-022','FAIL','Individual funding-to-closeout lifecycle','Reporting truthfulness blocks closeout'],
    ['GRT-023','PASS','Rejection, withdrawal and recovery lifecycle','Negative and successful branches completed'],
    ['GRT-024','FAIL','Organization and public-funding lifecycle','Complete entity/public chain is not all-pass']
  ],
  findings: [
    {id:'GRT002-SEARCH-001',scenario:'GRT-002',severity:'high',area:'Grant list',title:'Exact visible-title search returns no result',summary:'Searching for the visible invited grant Treop emptied the result list; clearing the search restored the same record.',expected:'Exact and partial title search must return matching visible grants without changing ownership scope.',retest:'Search owned, applied and invited exact/partial titles plus no-match at all six sizes.'},
    {id:'GRT003-VALID-001',scenario:'GRT-003',severity:'high',area:'Grant creation',title:'Blank grant step advances to publication controls',summary:'Next accepted an entirely blank first step and exposed active publication/draft controls. Validation occurred only after final save for the wallet prerequisite.',expected:'Required title, amount, purpose and valid-date errors must block leaving the first step.',retest:'Submit blank, zero, negative and invalid-date values; correct each error and persist a draft.'},
    {id:'GRT005-ANSWER-001',scenario:'GRT-005',severity:'high',area:'Eligibility',title:'Reviewers cannot see required custom answers',summary:'The recent typed application contained required custom field families, but creator review omitted the submitted answers.',expected:'Decision makers must see the exact applicant answers and rule outcome before deciding.',retest:'Submit all supported field families and compare applicant draft, receipt and creator review.'},
    {id:'GRT005-CFG-001',scenario:'GRT-003, GRT-005, GRT-010',severity:'high',area:'Grant configuration',title:'Saved grant configuration changes on reload',summary:'Funding-stage eligibility disappeared; invitation/public settings reverted; Even Split changed to Fixed Solo; reporting cadence disagreed with setup.',expected:'Every saved rule, funding mode and reporting setting must persist consistently across edit, detail and public views.',retest:'Save a matrix draft, close, reload and compare every field before publication.'},
    {id:'GRT007-LINK-001',scenario:'GRT-007',severity:'high',area:'Email delivery',title:'Application-review email link has invalid certificate',summary:'Following the delivered review CTA reached a certificate common-name error; no browser safety bypass was attempted.',expected:'All lifecycle email CTAs must use a valid certificate and open the authorized record.',retest:'Send fresh invitations and applications, then follow each CTA in the intended actor profile.'},
    {id:'GRT011-CLOSED-001',scenario:'GRT-011, GRT-019',severity:'high',area:'Public grant page',title:'Closed grant still presents Apply',summary:'The public panel clearly labels the grant closed while still exposing Apply and an inconsistent application deadline.',expected:'Closed grants must not invite new applications and all views must show one authoritative deadline.',retest:'Close a grant, refresh signed-in and guest pages, then try a staged and a new application.'},
    {id:'GRT014-STATE-001',scenario:'GRT-014, GRT-017',severity:'medium',area:'Decision state',title:'Grant panels remain stale after decisions',summary:'Approval, disbursement, chat and feedback changes required a full reload; one overview still disagreed after reload.',expected:'Successful mutations must invalidate every affected panel or clearly require refresh.',retest:'Observe both actors immediately, after refresh and after re-login for each decision.'},
    {id:'GRT017-REC-001',scenario:'GRT-017, GRT-018',severity:'high',area:'Grant finance',title:'Award receipt reverses sender and recipient',summary:'Wallet movement was correct, but the award receipt labelled the applicant as sender and the grant as recipient.',expected:'Receipt parties and transaction type must match actual value direction.',retest:'Award an isolated grant and reconcile creator, grant and recipient wallets plus receipt.'},
    {id:'GRT020-BAL-001',scenario:'GRT-018, GRT-020',severity:'high',area:'Termination refund',title:'Refunded terminated grant retains a nonzero balance',summary:'The creator refund reconciled, but fresh terminated-grant wallet readback still showed USD 1.',expected:'Terminal balances and ledger entries must reconcile where refunded value is represented.',retest:'Fund, terminate and reconcile both wallets, journal, running balance and receipts after fresh login.'},
    {id:'GRT021-REPORT-001',scenario:'GRT-021, GRT-022',severity:'critical',area:'Grant reporting',title:'Grant views invent contradictory reporting obligations',summary:'Details says Tracking Enabled: No and Reporting Required: No, while Overview says monthly schedule is active; the closed grant shows $5,000 disbursed, $5,000 unused and no reports.',expected:'Reporting cadence, obligations and utilization must come only from saved configuration and authoritative transactions.',retest:'Award grants with tracking on and off; compare creator, recipient, report and closeout views.'},
    {id:'GRT024-COVERAGE-001',scenario:'GRT-024',severity:'medium',area:'Composite lifecycle',title:'Organization and public-funding lifecycle is incomplete',summary:'Organization and public-contribution fixtures exist, but entity attribution, sandbox checkout, award, agreement, disbursement and report did not form one fully reconciled chain.',expected:'One organization-owned public grant must complete the entire lifecycle with identities, notifications and finance reconciled.',retest:'Run a fresh organization grant from creation through public funding and recipient closeout.'}
  ]
};

window.PR_REVIEW_DATA = {
  meta: {generatedAt:'2026-09-12T07:45:00Z',commit:'ed1f5aec',url:'https://github.com/capitalinvestmentclub/grantor-uat-report',source:'Grantor Chrome × six-size UAT run records in capitalinvestmentclub/webapp'},
  findings: window.ADMIN_UAT.findings.map((finding) => ({
    id:finding.id,type:finding.id==='GRT024-COVERAGE-001'?'Gap':'Defect',severity:finding.severity[0].toUpperCase()+finding.severity.slice(1),status:'Open',scenario:finding.scenario,area:finding.area,title:finding.title,description:finding.summary,expected:finding.expected,retest:finding.retest,source:`tests/e2e/grantor/${finding.scenario}`,line:1,sourceUrl:'https://github.com/capitalinvestmentclub/grantor-uat-report',evidenceRun:`Private ${finding.scenario} Chrome six-size run record`,evidenceRunUrl:'https://github.com/capitalinvestmentclub/grantor-uat-report',evidenceUrl:'',mediaEvidenceCount:0
  }))
};
