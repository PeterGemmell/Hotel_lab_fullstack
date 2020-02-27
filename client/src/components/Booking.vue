<template lang="html">
  <div class ="booking">
    <ul>
    <li><b>{{ booking.name }}</b></li>
    <li><b>{{ booking.email }}</b></li>
    <li> <label><b>Checked in</b></label></li>
      <input type="checkbox" v-model="booking.status" v-on:change="changeCheckedIn(booking._id, booking.status)"></li>
    <button type="button" class="delete-btn" v-on:click="deleteBooking">Delete Booking</button>
  </ul>
  </div>
</template>

<script>

import {eventBus} from '@/main.js'
import BookingService from '../services/BookingService.js';

export default {
  name: "booking",
  props: ['booking'],

  methods: {
    deleteBooking(){
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    },
    changeCheckedIn(id, checkedStatus){
      const newData = {
        checkedIn: checkedStatus
      }
    }
  }
}

</script>

<style>

.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #F55536;
}
</style>
