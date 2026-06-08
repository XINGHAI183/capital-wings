const { toMarkers } = require('../../data/spots/spots.js');

Page({
  data: {
    longitude: 116.397463,
    latitude: 39.909187,
    scale: 10,
    markers: []
  },

  onLoad() {
    this.setData({
      markers: toMarkers()
    });
  },

  onMarkerTap(e) {
    const markerId = e.detail.markerId;
    const marker = this.data.markers.find(m => m.id === markerId);
    if (marker) {
      wx.showToast({
        title: marker.title,
        icon: 'none',
        duration: 1500
      });
    }
  }
});
