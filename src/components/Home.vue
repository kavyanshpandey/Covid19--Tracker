<template>
  <section>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <div class="first_div">
      <h2 style="font-size: 50px">Please Select Country</h2>
      <select v-model="current_country">
        <option disabled selected value="">Select Here</option>
        <option
          v-for="country in countries"
          :value="{ id: country.ID, name: country.Country }"
          :key="country.ID"
        >
          {{ country.Country }}
        </option>
      </select>
      <br />
      <br />
      <div>
        <button @click="getData">Click here to know the stats</button>
      </div>
    </div>

    <div class="first_div" v-if="toggle_data">
          <h2 style="margin: 0; display: inline; float: left; font-size: 25px">
            Total Conformed Cases :
            <span class="total_cases">{{ c_total_confirmed_cases }}</span>
          </h2>
          <h2 style="margin: 0; display: inline; float: right">
            Conformed Cases :
            <span class="total_cases">{{ c_new_confirmed }}</span>
          </h2>
          <br /><br />
          <h2 style="margin: 0; display: inline; float: left; font-size: 25px">
            Total Deaths : <span class="death">{{ c_total_death }}</span>
          </h2>
          <h2 style="margin: 0; display: inline; float: right">
            Deaths : <span class="death">{{ c_new_death }}</span>
          </h2>
          <br /><br />
          <h2 style="margin: 0; display: inline; float: left; font-size: 25px">
            Total Recovered :
            <span class="recovered">{{ c_total_recovered }}</span>
          </h2>
          <h2 style="margin: 0; display: inline; float: right">
            Recovered : <span class="recovered">{{ c_new_recovered }}</span>
          </h2>
        </div>

    <div class="first_div">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div>
        <h1>Global Stats</h1>
        <br />
        <h2 style="margin: 0; display: inline; float: left; font-size: 25px">
          Total Conformed Cases :
          <span class="total_cases">{{ total_confirmed_cases }}</span>
        </h2>
        <h2 style="margin: 0; display: inline; float: right">
          Conformed Cases :
          <span class="total_cases">{{ new_confirmed }}</span>
        </h2>
        <br /><br />
        <h2 style="margin: 0; display: inline; float: left; font-size: 25px">
          Total Deaths : <span class="death">{{ total_death }}</span>
        </h2>
        <h2 style="margin: 0; display: inline; float: right">
          Deaths : <span class="death">{{ new_death }}</span>
        </h2>
        <br /><br />
        <h2 style="margin: 0; display: inline; float: left; font-size: 25px">
          Total Recovered : <span class="recovered">{{ total_recovered }}</span>
        </h2>
        <h2 style="margin: 0; display: inline; float: right">
          Recovered : <span class="recovered">{{ new_recovered }}</span>
        </h2>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      
      current_country: "", //selected country
      countries: "", //Country array, that will include all countries data.
      toggle_data: false,

      total_confirmed_cases: 0,
      new_confirmed: 0,
      total_death: 0,
      new_death: 0,
      total_recovered: 0,
      new_recovered: 0,

      c_total_confirmed_cases: 0,
      c_new_confirmed: 0,
      c_total_death: 0,
      c_new_death: 0,
      c_total_recovered: 0,
      c_new_recovered: 0,
    };
  },
  methods: {
    fetchData() {
      fetch("https://api.covid19api.com/summary")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          console.log(data);
          console.log(data.Countries);
          this.countries = data.Countries;
          this.total_confirmed_cases = data.Global.TotalConfirmed;
          this.new_confirmed = data.Global.NewConfirmed;
          this.total_recovered = data.Global.TotalRecovered;
          this.new_death = data.Global.NewDeaths;
          this.total_death = data.Global.TotalDeaths;
          this.new_recovered = data.Global.NewRecovered;
        });
    },

    getData() {
      for (const rec of this.countries) {
        if (this.current_country.id === rec.ID) {
          console.log(rec.NewConfirmed);

          this.c_total_confirmed_cases = rec.TotalConfirmed;
          this.c_new_confirmed = rec.NewConfirmed;
          this.c_total_recovered = rec.TotalRecovered;
          this.c_new_death = rec.NewDeaths;
          this.c_total_death = rec.TotalDeaths;
          this.c_new_recovered = rec.NewRecovered;
          this.toggle_data = true;

          const web = WebClient(this.token);
          break;
        }
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>




<style scoped>

.first_div {
  position: relative;
  margin: 2rem auto;
  max-width: 70rem;
  height: 28vh;

  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}


button {
  background: #000000;
  color: #ffffff;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 5px;
  border: 1px solid #000000;
}
button:hover {
  background: #1a1919;
  color: #ffffff;
  padding:1rem;
  border-radius: 5px;
  transition: 0.3s;
 
}

button:active{
  background:#ffffff;
  color: #000000;
  border-color: #000000;
  border: 1px solid #000000;
  transition: 0.3s;
}

.total_cases {
  color: #00a4ef;
  font-size: 30px;
}

.recovered {
  color: rgb(122, 207, 37);
  font-size: 30px;
}

.death {
  color: crimson;
  font-size: 30px;
}

select {
        width: 10rem;
        margin: 10px;
        height:3rem;
        cursor: pointer;
       
}
select:focus {
        min-width: 15px;
        width: auto;
}
</style>
