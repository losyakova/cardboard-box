<template>
  <!-- модальное окно -->
  <div class="modal fade" id="modalToggle" aria-hidden="true" tabindex="-1">
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog modal-xl"
    >
      <div class="modal-content light-color">
        <button
          type="button"
          class="btn-close align-self-end m-1 me-2"
          aria-label="Close"
          data-bs-dismiss="modal"
        ></button>
        <div class="modal-body">
          <app-card-horizontal
            :title="`${catsItem.name}. ${subtitle}`"
            :img="catsItem.img"
          >
            <div class="d-flex flex-column justify-content-between h-90">
              <hr />
              <div class="row">
                <p>
                  {{ Object(this.catsItem.info)[active] }}
                </p>
              </div>
              <div class="d-flex justify-content-evenly">
                <a
                  :class="{ active: active === 'description' }"
                  @click="this.active = 'description'"
                  >Основное</a
                >
                <a
                  :class="{ active: active === 'history' }"
                  @click="this.active = 'history'"
                  >История</a
                >
                <a
                  :class="{ active: active === 'nature' }"
                  @click="this.active = 'nature'"
                  >Характер</a
                >
              </div>
            </div>
          </app-card-horizontal>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid light-color">
    <div class="container">
      <app-text-block title="Онлайн выставка кошек">
        <p>
          Добро пожаловать на страницу выставки. Здесь вы найдёте самых
          красивых, уникальных и очаровательных кошек со всех уголков мира. А
          также сможете насладиться их красотой, грацией и индивидуальностью, не
          выходя из дома.
        </p>
      </app-text-block>
    </div>
  </div>

  <div class="container-fluid" :class="isReady ? 'darl-color' : 'light-color'">
    <div class="container pt-5 pb-5">
      <the-show-cats
        v-if="isReady"
        @show-modal="openCard"
        idModal="#modalToggle"
        :content="getCatsInfo()"
      ></the-show-cats>
      <app-loader v-else></app-loader>
    </div>
  </div>
</template>

<script>
import AppCardHorizontal from '@/components/AppCardHorizontal.vue';
import AppTextBlock from '@/components/AppTextBlock.vue';
import TheShowCats from '@/components/TheShowCats.vue';
import AppLoader from '@/components/AppLoader.vue';

export default {
  components: { AppCardHorizontal, AppTextBlock, TheShowCats, AppLoader },
  methods: {
    openCard(i) {
      this.active = 'description';
      this.catsItem = i;
    },
    async loadInfoCats() {
      let tempdata = this.getCatsInfo(); //
      if (tempdata !== null) return;
      try {
        this.isReady = false;
        const responce = await fetch(
          'https://fbproject-cats-vue-default-rtdb.firebaseio.com/cats.json'
        );
        const data = await responce.json();
        this.setCatsInfo(
          Object.keys(data).map((key) => {
            return {
              id: key,
              ...data[key],
            };
          })
        );
      } catch (e) {
        console.warn(e.message);
      } finally {
        this.isReady = true;
      }
    },
  },
  data() {
    return {
      isReady: true,
      // catsInfo: null,
      catsItem: {},
      active: 'description',
    };
  },
  computed: {
    subtitle() {
      if (this.active === 'description') return 'Описание';
      else if (this.active === 'history') return 'История';
      else if (this.active === 'nature') return 'Характер';
      else return '==noknow==';
    },
  },
  mounted() {
    this.loadInfoCats();
  },
  inject: ['setCatsInfo', 'getCatsInfo'],
};
</script>

<style scoped>
p {
  font-size: 20px;
}
a {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
