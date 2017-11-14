<template>
  <button :class="'flash-btn-'+type+' flash-btn-size-'+size"><slot></slot></button>
</template>
<script>
    function oneOf (value, validList) {
        for (let i = 0; i < validList.length; i++) {
            if (value === validList[i]) {
                return true;
            }
        }
        return false;
    }
    export default{
        props:{
            type:{
                default:'primary',
                validator(value){
                    return oneOf(value,['primary','error','success','warning'])
                }
            },
            size:{
                default:'default',
                validator(value){
                    return oneOf(value,['large','default','small'])
                }
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
    padding: 7px 15px;
    border-radius: 4px;
    height: 32px;
    opacity: .8;
    text-align: center;
    font-family: Ubuntu,sans-serif;
    font-size: 14px;
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

.flash-btn-size-large{
    height: 36px;
    font-size: 15px;
}
.flash-btn-size-small{
    height: 24px;
    font-size: 12px;
    padding: 2px 7px;
}
</style>
