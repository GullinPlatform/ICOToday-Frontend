<template>
  <!-- Navbar-->
      <!-- Remove ".navbar-sticky" class to make navigation bar scrollable with the page.-->
      <header class="navbar navbar-sticky">
        <!-- Search-->
        <form class="site-search" method="get">
          <input type="text" name="site_search" placeholder="Type to search...">
          <div class="search-tools"><span class="clear-search">Clear</span><span class="close-search"><i class="icon-cross"></i></span></div>
        </form>
        <div class="site-branding">
          <div class="inner">
            <!-- Off-Canvas Toggle (#shop-categories)--><a ></a>
            <!-- Off-Canvas Toggle (#mobile-menu)--><a ></a>
            <!-- Site Logo--><a class="site-logo" href="../index.html">ICOToday</a>
          </div>
        </div>
        <!-- Main Navigation-->
        <nav class="site-menu">
          <ul>
            <li><a href="../index.html"><span>Publish ICO</span></a></li>
            <li><a href="../shop-grid-ls.html"><span>Invest</span></a></li>
            <li><a href="../shop-grid-ls.html"><span>Learn</span></a></li>
          </ul>
        </nav>
        <!-- Toolbar-->
        <div class="toolbar">
          <div class="inner">
            <div class="tools">
              <div class="search"><i class="icon-search"></i></div>
              <div class="account"><a href="../account-orders.html"></a><i class="icon-head"></i>
                <ul class="toolbar-dropdown">
                  <li class="sub-menu-user">
                    <div class="user-ava"><img src="../../../static/img/account/user-ava-sm.jpg" alt="Daniel Adams">
                    </div>
                    <div class="user-info">
                      <h6 class="user-name">Daniel Adams</h6><span class="text-xs text-muted">290 Reward points</span>
                    </div>
                  </li>
                    <li><a href="../account-profile.html">My Profile</a></li>
                    <li><a href="../account-orders.html">Orders List</a></li>
                    <li><a href="../account-wishlist.html">Wishlist</a></li>
                  <li class="sub-menu-separator"></li>
                  <li><a href="#"> <i class="icon-unlock"></i>Logout</a></li>
                </ul>
              </div>
              <div class="cart"><a href="../cart.html"></a><i class="icon-bag"></i><span class="count">3</span><span class="subtotal">$289.68</span>
                <div class="toolbar-dropdown">
                  <div class="dropdown-product-item"><span class="dropdown-product-remove"><i class="icon-cross"></i></span><a class="dropdown-product-thumb" href="../shop-single.html"><img src="../../../static/img/cart-dropdown/01.jpg" alt="Product"></a>
                    <div class="dropdown-product-info"><a class="dropdown-product-title" href="../shop-single.html">Unionbay Park</a><span class="dropdown-product-details">1 x $43.90</span></div>
                  </div>
                  <div class="dropdown-product-item"><span class="dropdown-product-remove"><i class="icon-cross"></i></span><a class="dropdown-product-thumb" href="../shop-single.html"><img src="../../../static/img/cart-dropdown/02.jpg" alt="Product"></a>
                    <div class="dropdown-product-info"><a class="dropdown-product-title" href="../shop-single.html">Daily Fabric Cap</a><span class="dropdown-product-details">2 x $24.89</span></div>
                  </div>
                  <div class="dropdown-product-item"><span class="dropdown-product-remove"><i class="icon-cross"></i></span><a class="dropdown-product-thumb" href="../shop-single.html"><img src="../../../static/img/cart-dropdown/03.jpg" alt="Product"></a>
                    <div class="dropdown-product-info"><a class="dropdown-product-title" href="../shop-single.html">Haan Crossbody</a><span class="dropdown-product-details">1 x $200.00</span></div>
                  </div>
                  <div class="toolbar-dropdown-group">
                    <div class="column"><span class="text-lg">Total:</span></div>
                    <div class="column text-right"><span class="text-lg text-medium">$289.68&nbsp;</span></div>
                  </div>
                  <div class="toolbar-dropdown-group">
                    <div class="column"><a class="btn btn-sm btn-block btn-secondary" href="../cart.html">View Cart</a></div>
                    <div class="column"><a class="btn btn-sm btn-block btn-success" href="../checkout-address.html">Checkout</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
</template>
<script>
  import SignupModal from 'components/Signup'
  import LoginModal from 'components/Login'

  export default {
    name: 'Header',
    components: {
      LoginModal,
      SignupModal
    },
    computed: {
      me () {
        return this.$store.getters.self
      },
      self_name () {
        return this.$store.getters.self_name
      },
      login_status () {
        return this.$store.getters.login_status
      },
    },
    methods: {
      logout () {
        console.log('logout-methods')
        this.$store.dispatch('logout')
      }
    }
  }

</script>
