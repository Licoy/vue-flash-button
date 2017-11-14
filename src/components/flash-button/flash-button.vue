<template>
  <div class="flash-button-container">
      <button :class="'flash-btn-'+color"><slot></slot></button>
  </div>
</template>
<script>
    export default{
        props:{
            color:{
                default:'primary'
            }
        },
        data(){
            return {}
        }
    }
</script>
<style scoped>
[class*=flash-btn-] {
    display: inline-block;
    text-indent: 0;
    position: relative;
    color: #fff;
    padding: 0 10px 0 10px;
    min-width: 160px;
    height: 38px;
    line-height: 38px;
    opacity: .8;
    text-align: center;
    font-family: Ubuntu,sans-serif;
    font-size: 15px;
    text-decoration: none;
    border-radius: 2px;
    overflow: hidden;
    -webkit-transition: all .15s ease-in;
    transition: all .15s ease-in;
    border:none
}
[class*=flash-btn-]:before {
	content: '';
	position: absolute;
	background: #fff;
	width: 25px;
	height: 50px;
	top: 0;
	left: -45px;
	opacity: .3;
	-webkit-transition: all .25s ease-out;
	transition: all .25s ease-out;
	-webkit-transform: skewX(-25deg);
	transform: skewX(-25deg)
}
[class*=flash-btn-]:hover {
	opacity: .65;
    color: #fff;
    cursor: pointer;
}
[class*=flash-btn-]:hover:before {
	width: 45px;
	left: 205px
}

.flash-btn-primary {
	background: #1cb2f5
}

.flash-btn-error {
	background: #C00
}

.flash-btn-warning {
	background: #F90
}

.flash-btn-success {
	background: #096
}
</style>
