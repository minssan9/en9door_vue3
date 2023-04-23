<template>
  <router-view />
</template>

<script>
import ChannelService from "@/plugins/channeltalk/ChannelService";

export default {
  name: 'App',
  mounted() {
    ChannelService.loadScript();
    ChannelService.boot({
      "pluginKey": "00a3439b-6d2a-4b1e-b63d-42daddd705e8", // fill your plugin key
      "zIndex": 1,
      "appearance": "system"
      // "memberId": "USER_MEMBER_ID", // fill user's member id
      // "profile": { // fill user's profile
      //   "name": "USER_NAME", // fill user's name
      //   "mobileNumber": "USER_MOBILE_NUMBER", // fill user's mobile number
      //   "CUSTOM_VALUE_1": "VALUE_1", // custom property
      //   "CUSTOM_VALUE_2": "VALUE_2" // custom property
    });
  },
  methods:{  }
};
</script>
