<template>
  <section class="awards">
    <div class="awards--box">
      <div class="awards--title">
        <h3>Awards & Recognition</h3>
      </div>
      <div class="awards--list">
        <div class="line1"></div>
        <div
          v-for="details in awardDetails"
          :key="details.id"
          class="awards--list--items--container"
        >
          <div class="awards--list--items">
            <h2>
              {{ details.name }}
            </h2>
          </div>
          <div class="line1"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      awardDetails: [
        {
          id: 1,
          name: "AFRICA MOVIE ACADEMY",
        },
        {
          id: 2,
          name: "AWARD FOR BEST ACTRESS IN A LEADING ROLE",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixin";
@import "@/styles/typography";
.awards {
  padding: 5rem 3%;
  margin-top: 4rem;
  position: relative;
}
.awards--title {
  margin-bottom: 1.5rem;
  h3 {
    @include film {
      color: #292d32;
    }
  }
}
.awards--list--items {
  h2 {
    width: min(801px, 90%);
    @include awards {
      color: #000000;
    }
  }
}
.line1 {
  width: 100%;
  border: 1px solid #000000;
  margin: 0rem 0;
}
@media screen and (max-width: 1024px) {
  .awards--list--items {
  h2 {
    @include awards {
      font-size: 3rem;
    }
  }
} 
}
@media screen and (max-width: 700px) {
  .awards--list--items {
  h2 {
    @include awards {
      font-size: 2rem;
    }
  }
} 
}
@media screen and (max-width: 450px) {
  .awards--list--items {
  h2 {
    @include awards {
      font-size: 1.5rem;
    }
  }
} 
}
</style>
