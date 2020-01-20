<template>
    <div class="profile-edit-full pt-120">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-3">
                    <div class="profile-edit-left">
                        <div class="profile-thumb-box">
                            <div class="profile-thumb-change">
                                <span><i class="fas fa-camera"></i></span>
                            </div>
                            <figure>
                                <img src="/images/step1_user.jpg" alt="">
                            </figure>
                            <div class="profile-per-name">
                                <h3>John doe</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-sm-9">
                    <div class="profile-edit-right">
                        <div class="profile-edit-item">
                            <h3>Change personal information</h3>
                            <div class="profile-edit-input-box">
                                <div class="profile-edit-input-field">
                                    <label for="">First name <sup>*</sup></label>
                                    <input type="text" value="John" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Last name <sup>*</sup></label>
                                    <input type="text" value="Doe" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Company name <sup>*</sup></label>
                                    <input type="text"  class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Birth date <sup>*</sup></label>
                                    <div class="profile-edit-birth-more">
                                        <select name="" id="" class="f-input">
                                            <option value="">10</option>
                                        </select>
                                        <select name="" id="" class="f-input">
                                            <option value="">07</option>
                                        </select>
                                        <select name="" id="" class="f-input">
                                            <option value="">1987</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Email address <sup>*</sup></label>
                                    <input type="text" value="xyz@example.com" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Phone <sup>*</sup></label>
                                    <input type="tel" value="+8801781610033" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Country <sup>*</sup></label>
                                    <select name="" id="" class="f-input">
                                        <option value="">Bangladesh</option>
                                    </select>
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">Address <sup>*</sup></label>
                                    <input type="text" value="" placeholder="Street address" class="f-input">
                                </div>
                            </div>
                            <div class="profile-edit-button">
                                <button class="_1btn">Save changes</button>
                            </div>
                        </div>
                        <div class="profile-edit-item">
                            <h3>Change password</h3>
                            <div class="profile-edit-input-box flex-col">
                                <div class="profile-edit-input-field">
                                    <label for="">Current password <sup>*</sup></label>
                                    <input type="password" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">New password <sup>*</sup></label>
                                    <input type="password" class="f-input">
                                </div>
                                <div class="profile-edit-input-field">
                                    <label for="">New password again <sup>*</sup></label>
                                    <input type="password" class="f-input">
                                </div>
                            </div>
                            <div class="profile-edit-button">
                                <button class="_1btn">Save password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
