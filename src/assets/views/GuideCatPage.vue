<template>
  <div class="container-fluid light-color">
    <app-text-block title="Как завести котёнка">
      Если вы не раз задумывались о том, чтобы завести кошку, и наконец-то
      решились, тогда следует заняться тщательным поиском, чтобы найти питомца,
      который подойдет для вашего образа жизни и семьи.
    </app-text-block>
    <div class="container p-0">
      <img
        src="../img/cats-2.png"
        class="img-fluid fd"
        alt="Баннер с кошками"
      />
    </div>
    <app-text-block title="Как выбрать?">
      Разнообразие кошачьих пород представляет собой огромный выбор для
      потенциальных владельцев, но независимо от этого , каждая кошка обладает
      своим уникальным характером и шармом.
    </app-text-block>
    <div class="container">
      <div class="row justify-content-center">
        <app-number-card
          v-for="(item, index) in before"
          :key="index"
          :number="index + 1"
          :text="item"
        ></app-number-card>
      </div>
    </div>
  </div>
  <div class="container-fluid light-color m-0 p-0">
    <img
      src="../img/cat-4.png"
      class="img-fluid"
      alt="Баннер с кошками"
      width="100%"
    />
  </div>
  <div class="container-fluid darl-color-2">
    <div class="container pb-3">
      <app-text-block title="Что дальше?">
        Здоровый, счастливый и общительный котенок станет отличным компаньоном и
        членом вашей семьи.
      </app-text-block>
      <div class="row justify-content-center">
        <app-number-card
          v-for="(item, index) in after"
          :key="index"
          :number="index + 1"
          :text="item"
        ></app-number-card>
      </div>
    </div>
  </div>
  <div class="container-fluid light-color p-3">
    <app-text-column>
      <template #right-column>
        <h3>Как научить котенка распознавать свою кличку</h3>
        <p>
          Научить котенка отзываться на свою кличку проще, чем кажется. Вам
          должны помочь следующие простые советы.
        </p>
      </template>
      <template #left-column>
        <ul>
          <li>
            Выберите короткую кличку с небольшим количеством слогов. Это
            облегчит распознавание для котенка.
          </li>
          <li>
            Позовите котенка, чтобы покормить его или поиграть с ним, и
            повторяйте его кличку в процессе.
          </li>
          <li>
            Произнесите кличку котенка и сразу же дайте ему лакомство. Они
            зачастую более восприимчивы, когда голодны, поэтому выполнить эти
            упражнения лучше перед кормлением.
          </li>
        </ul>
      </template>
    </app-text-column>
  </div>
</template>

<script>
import AppTextBlock from '@/components/AppTextBlock.vue';
import AppNumberCard from '@/components/AppNumberCard.vue';
import AppTextColumn from '@/components/AppTextColumn.vue';
export default {
  components: { AppTextBlock, AppNumberCard, AppTextColumn },
  data() {
    return {
      before: [
        'Решите, какого пола и породы котенка вы хотите: учтите особенности характера, ухода и потребностей различных пород.',
        'Изучите местные приюты для животных: здесь вы можете найти котят, которые ищут новый дом или обратитесь к знакомым. Посетите разведения: если вы хотите чистокровного котенка определенной породы, обратитесь к профессиональным разведениям.',
        'При выборе котенка обращайте внимание на его активность, чистоту и общее состояние. Пообщайтесь с ним, поиграйте, погладьте. Это поможет вам оценить характер и уровень общительности котенка.',
        'Узнайте о происхождении и уходе за котятами: обратитесь к владельцу или в приюте к информации о том, что котенку было предоставлено ранее, каковы его особенности и привычки. Направьте внимание на здоровье котенка: убедитесь, что ветеринарные процедуры и прививки были проведены. ',
      ],
      after: [
        'Подготовьте дом к приему котенка: убедитесь, что дом оборудован всем необходимым для заботы о нем, включая лоток, миски для еды и воды, игрушки, место для сна и подходящий корм',
        'Приведите котенка домой: дайте ему время осмотреть новое место и привыкнуть к новым запахам. Убедитесь, что нет опасных предметов или растений, к которым котенок может обратить внимание. Познакомьте котенка с другими членами семьи. Дайте им знакомиться и строить связи друг с другом в своем темпе.',
        'Ухаживайте за котенком: уделяйте время игре, ласке и общению с котенком, чтобы он почувствовал себя в безопасности и любимым.',
        'Проводите прививки и визиты к ветеринару: сразу же по прибытии котенка в новый дом, обеспечьте ему все необходимые прививки и профилактику. Внимательно следите за его поведением и состоянием здоровья, при необходимости обращайтесь к ветеринару.',
      ],
    };
  },
};
</script>

<style scoped>
.fd {
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
}
</style>
