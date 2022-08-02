<template>
	<header>
		<Menubar />
	</header>
	<main>
		<Myform />
	</main>
</template>

<script>
import Menubar from './Menubar.vue'
import Myform from './Myform.vue'

export default {
	name: 'My-form',
	components: {
    Menubar,
    Myform
}
}
</script>