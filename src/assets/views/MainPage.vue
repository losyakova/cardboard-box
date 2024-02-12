<template>
  <!-- {{ facts }} -->
  <div class="light-color">
    <the-slider :content="sliderContent"></the-slider>
  </div>
  <div class="light-color">
    <!-- <a href="#header"></a> -->
    <app-text-column>
      <template #right-column>
        <h2>"Картонная коробка"</h2>
        <p>увлекательное путешествие в мир кошек</p>
      </template>
      <template #left-column>
        <p>
          На выставке "Картонная коробка" вы сможете любоваться красотой и
          изяществом разнообразных пород кошек, узнать их историю и особенности,
          а также узнать о том, как правильно ухаживать за ними. Вас ждут
          увлекательные демонстрации кошачьих талантов, конкурсы и
          мастер-классы, а также возможность завести новых друзей и поделиться
          своими впечатлениями с другими любителями кошек.
        </p>
      </template>
    </app-text-column>
  </div>

  <div class="darl-color">
    <app-text-block title="Главное событие">
      В честь "Дня кошки" состоится феерическая выставке породистых кошек.
      Приглашаем вас принять уникальном мероприятии, насыщенном увлекательными
      мастер-классами, захватывающими демонстрациями кошачьих талантов,
      конкурсами и многим-многим другим!
    </app-text-block>

    <!-- <a href="#regist"></a> -->
    <the-card-gallery :content="eventList"></the-card-gallery>
    <app-text-block title="Регистрация" id="regist">
      Запишитесь прямо сейчас, чтобы вы и ваш питомец смогли принять участие.
    </app-text-block>

    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col col-md-6 col-12">
          <form @submit.prevent="submit" class="needs-validation" novalidate>
            <app-text-field
              ref="email"
              v-model="email"
              idInput="email"
              type="email"
              title="E-mail"
              placeholder="name@mail.ru"
            ></app-text-field>
            <app-text-field
              ref="firstName"
              v-model="firstName"
              idInput="nameField"
              type="text"
              title="Имя"
              placeholder="Дмитрий Васильев"
            ></app-text-field>
            <app-text-field
              ref="phone"
              v-model="phone"
              idInput="phone"
              type="tel"
              title="Телефон"
              placeholder="+7(999) 999-99-99"
            ></app-text-field>
            <div class="row justify-content-center mt-5">
              <button class="btn btn-primary">Отправить</button>
              <small class="text-center mt-2"
                >Нажимая на кнопку, вы соглашаетесь с условиями о персональных
                данных</small
              >
            </div>
          </form>
        </div>
      </div>
    </div>

    <app-image-banner></app-image-banner>
  </div>

  <div class="light-color">
    <app-text-block title="Интересные факты">
      Кошки - прекрасные животные, которые завоевали сердца многих людей своим
      уникальным характером и обаянием.
    </app-text-block>

    <div class="container pb-4" v-if="isReady">
      <app-card-horizontal
        v-for="fact in facts"
        :key="fact.id"
        :title="fact.title"
        :img="fact.img"
      >
        <ul>
          <li v-for="(info, id) in fact.info" :key="id">{{ info }}</li>
        </ul>
      </app-card-horizontal>
    </div>
    <app-loader v-else class="mb-5"></app-loader>
  </div>
</template>

<script>
import AppTextColumn from '@/components/AppTextColumn.vue';
import AppTextBlock from '@/components/AppTextBlock.vue';
import TheCardGallery from '@/components/TheCardEvent.vue';
import AppTextField from '@/components/AppTextField.vue';
import AppImageBanner from '@/components/AppImageBanner.vue';
import AppCardHorizontal from '@/components/AppCardHorizontal.vue';
import TheSlider from '@/components/TheSlider.vue';
import AppLoader from '@/components/AppLoader.vue';
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      sliderContent: ['1.jpg', '2.jpg', '3.png', '4.jpeg'],
      eventList: [
        {
          id: 0,
          img: 'confirence.jpg',
          date: '12:00-13:00',
          title: 'История и особенности породистых кошек',
          text: 'Встреча в формате живого общения, где вы сможете узнать много интересного о жизни и особенностях ухода за этими замечательными существами',
        },
        {
          id: 1,
          img: 'cat-circus.jpg',
          date: '14:00-15:30',
          title: 'Шоу талантов',
          text: 'Подарите себе и своей семье незабываемые впечатления, посетив это волшебное событие! Наши звезды уже ждут встречи с вами!',
        },
        {
          id: 2,
          img: 'cat-view.jpg',
          date: '15:30-18:00',
          title: 'Выставка',
          text: 'Погрузитесь в мир кошачьей элегантности и изящества, наслаждайтесь выставочными номерами, участвуйте в конкурсах и получайте море удовольствия от общения с этими удивительными животными.',
        },
      ],
      email: '',
      firstName: '',
      phone: '',
      isReady: true,
      regularEmail:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  methods: {
    ...mapActions('factCats', ['load']),
    submit() {
      let flag = { name: true, phone: true, email: true };
      if (!this.email) {
        this.$refs.email.checkValid(false);
        flag.name = false;
      } else if (!this.email.match(this.regularEmail)) {
        this.$refs.email.checkValid(false);
        flag.name = true;
      } else {
        this.$refs.email.checkValid(true);
        flag.name = true;
      }
      if (!this.phone) {
        this.$refs.phone.checkValid(false);
        flag.phone = false;
      } else {
        this.$refs.phone.checkValid(true);
        flag.phone = true;
      }
      if (!this.firstName) {
        this.$refs.firstName.checkValid(false);
        flag.firstName = false;
      } else {
        this.$refs.firstName.checkValid(true);
        flag.firstName = true;
      }
      if (flag.name && flag.phone && flag.email) this.addEntry();
    },
    async loadfacts() {
      this.isReady = false;
      await this.load();
      this.isReady = true;
    },
    async addEntry() {
      try {
        // this.isReady = false;
        const header = { 'Content-Type': 'application/json' };
        const body = {
          id: Math.random(),
          //... для создания заявки
          // name: this.firstName,
          // phone: this.phone,
          // email: this.email
        };
        // const response =
        await fetch(
          'https://fbproject-cats-vue-default-rtdb.firebaseio.com/form.json',
          {
            method: 'POST',
            body: JSON.stringify(body),
            headers: header,
          }
        );
        alert('Регистрация прошла успешно');
        this.firstName = '';
        this.email = '';
        this.phone = '';
        this.$refs.email.checkValid(null);
        this.$refs.phone.checkValid(null);
        this.$refs.firstName.checkValid(null);
        // const data = response.json();
        // console.log(data);
      } catch (e) {
        console.error(e.message);
      }
    },
  },
  components: {
    TheSlider,
    AppTextColumn,
    AppTextBlock,
    TheCardGallery,
    AppTextField,
    AppImageBanner,
    AppCardHorizontal,
    AppLoader,
  },
  mounted() {
    this.loadfacts();

    let section = this.$route.hash.replace('#', '');
    if (section)
      this.$nextTick(() =>
        window.document.getElementById(section).scrollIntoView()
      );
  },
  computed: {
    ...mapGetters('factCats', ['facts'])
  }
};
</script>

<style scoped></style>
