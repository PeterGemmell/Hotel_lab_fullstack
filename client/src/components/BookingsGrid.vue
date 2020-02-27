<template lang="html">
  <div id="bookingsGrid">
    <booking v-for="booking in bookings" :booking="booking" />
  </div>
</template>

<script>
import Booking from './Booking';
import BookingService from '../services/BookingService.js';
import  { eventBus } from '../main.js';

export default {
  name: "bookings-grid",
  data(){
    return {
      bookings: []
    }
  },
  components: {
    'booking': Booking
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })
    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    })
  },
  methods:{
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }

}
</script>

<style>
</style>
