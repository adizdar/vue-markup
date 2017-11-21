<template lang="html">
  <div class="vmd-dropdown--container">
    <!-- Dropdown Trigger -->
    <a
      class='dropdown-button btn'
      href='#'
      data-activates='dropdown_settings'>
      <i class="material-icons large">more_vert</i>
    </a>

    <!-- Dropdown Structure -->
    <ul id='dropdown_settings' class='dropdown-content'>
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
      <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
      <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dropdownSettings'
}
</script>

<style lang="css" scoped>
  .vmd-dropdown--container .btn {
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background-color: transparent;
    color: black;
    padding: 0.4rem 0.8rem;
  }

  .vmd-dropdown--container .btn i {
    font-size: 1.8rem;
  }

  .vmd-dropdown--container .dropdown-content > li > a {
    color: #37474f;
  }
</style>
