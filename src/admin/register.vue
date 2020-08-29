<template>
  <div class="main">
    <div class="container">
      <div class="row centered-form">
        <div
          class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4"
        >
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                FORM REGISTATION <small>It's free!</small>
              </h3>
            </div>
            <div class="panel-body">
              <form role="form">
                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control input-sm"
                        placeholder=" Name"
                        v-model="name"
                      />
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="userName"
                        class="form-control input-sm"
                        placeholder="userName"
                        v-model="userName"
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    v-model="email"
                    class="form-control input-sm"
                    placeholder="Email Address"
                  />
                </div>
                <div class="input-group">
                  <div class="custom-file mb-3">
                    <input
                      type="text"
                      class="custom-file-input"
                      v-model="profileImg"
                      aria-describedby="inputGroupFileAddon04"
                    />
                    <label class="custom-file-label" for="inputGroupFile04"
                      >Choose file</label
                    >
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="password"
                        name="password"
                        v-model="password"
                        class="form-control input-sm"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        name="website link"
                        v-model="website"
                        class="form-control input-sm"
                        placeholder="website link"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="control-label">bio</label>
                  <textarea
                    class="form-control shadow"
                    v-model="bio"
                    placeholder="your text...."
                    rows="10"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Register"
                  class="btn btn-info btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.centered-form {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  max-width: 100% !important;
}

.centered-form .panel {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.3) 20px 20px 20px;
  max-width: 100% !important;
}
</style>
