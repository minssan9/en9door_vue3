<template>
  <div>
    <div class="container">
      <div class="mt-12 mb-12">
        <div   id="companyInfo">
          <Markdown :markdown="company_info"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Markdown from '@/components/Markdown'

export default {
  name: 'InfoCompany',
  data() {
    return {
      company_info: '' +
          '\n' +
          '## 사업자 정보\n' +
          '- 대표자명 : 한윤숙\n' +
          '- 사업자등록번호 : 397-05-01460\n' +
          '- 업종 신고 : 통신판매업 인천 서구-0112\n' +
          '- 사업장 주소 : 인천 서구 독정로 26-6',

    }
  },
  components: {
    Markdown
  },
  created() {},
  methods: {}
}
</script>

