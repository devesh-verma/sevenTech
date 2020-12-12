// STAGES EXPECTED: staging, pre-prod, prod
module.exports = {
  stage: process.env.APP_STAGE || 'staging',
  goapi: {
    url: process.env.GO_API_URL,
    secret: process.env.GO_API_SECRET
  },
  voucher: {
    validationUrl: process.env.VOUCHER_CLAIM_URL,
    claimUrl: process.env.VOUCHER_CLAIM_URL,
    key: process.env.VOUCHER_KEY
  },
  verifalia: {
    username: process.env.VERIFALIA_USERNAME,
    password: process.env.VERIFALIA_PASSWORD
  },
  addMember: {
    verifyReferrer: process.env.VERIFY_REFERRER_URL
  }
}
