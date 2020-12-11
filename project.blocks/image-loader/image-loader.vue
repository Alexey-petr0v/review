<template lang="pug">
  include image-loader
  +addImageLoader
</template>

<script>
  export default {
    props: {
      name: String
    },
    data: function() {
      return {
        images: [
          {urlImage: "images/image_loader_1.png"},
          {urlImage: "images/image_loader_2.png"},
          {urlImage: "images/image_loader_3.png"},
          {urlImage: "images/image_loader_4.png"}
        ],
        curFile: null,
        uploadReady: true
      }
    },
    methods: {
      validFileType(file) {
        let fileTypes = [
          'image/jpeg',
          'image/pjpeg',
          'image/png'
        ]
        for(let i = 0; i < fileTypes.length; i++) {
          if(file.type === fileTypes[i]) {
            return true;
          }
        }
        return false;
      },
      updateImageDisplay(event) {
        this.curFile = event.target.files;
        if (this.curFile.length == 0) {
          alert("Изображение не выбрано")
        }
        else {
          if(this.validFileType(this.curFile[0])) {
            this.images.push({urlImage: window.URL.createObjectURL(this.curFile[0])})
          }
          else {
            alert("Выбран неверный тип изображения")
          }
        }
      },
      deleteImage(event) {
      	this.uploadReady = false
        this.$nextTick(() => {
        	this.uploadReady = true
        })
        this.images.splice(this.images.indexOf(event), 1);
      }
    }
  }
</script>