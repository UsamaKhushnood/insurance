<template>
  <div class="constitutions">
    <BRow>
      <BCol cols="8">
        <pdf src="../../assets/pdf/constitutions.pdf"></pdf>
      </BCol>
      <BCol cols="4">
        <a class="download-btn" href="@/assets/pdf/constitutions.pdf" download>
          <b-icon icon="plus-circle-fill" class="me-2"></b-icon>
          Download a Copy
        </a>
      </BCol>
    </BRow>
  </div>
</template>
<script>
import pdf from "vue-pdf";
export default {
  components: { pdf },
};
</script>
<style lang="scss">
.download-btn {
  border: 1px solid #fff;
  padding: 10px;
  background: var(--blue);
  color: var(--yellow);
  border-radius: 5px;
  font-size: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
  transition: 0.3s all ease;
  text-decoration: none;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #fff;
  }
}
</style>