<template>
    <div  >
        <Row>
        <Col span="12"> <template class="text-center">
    <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="Name">
            <Input v-model="formData.name" ></Input>
        </FormItem>
        <FormItem label="Address">
            <Input  v-model="formData.address"  ></Input>
        </FormItem>
        <FormItem label="phone number" >
            <Input  v-model="formData.phone"  ></Input>
        </FormItem>
    
            <FormItem label="Monday"  >
                
                <td class="table-input table_extra_p">
                    <TimePicker v-model="businessHour[0].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                    <Checkbox v-model="businessHour[0].active">Active</Checkbox>
                </td>
            </FormItem>
            <FormItem label="Tuesday" >
                <td class="table-input"  >
                    <TimePicker v-model="businessHour[1].time"  format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                    <Checkbox v-model="businessHour[1].active">Active</Checkbox>
                </td>
            </FormItem>
             <FormItem label="Wednesday"  >
                <td class="table-input" >
                    <TimePicker v-model="businessHour[2].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                    <Checkbox v-model="businessHour[2].active">Active</Checkbox>
                </td>
            </FormItem>
            <FormItem label="Thursday">
                <td class="table-input"  >
                    <TimePicker v-model="businessHour[3].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                    <Checkbox v-model="businessHour[3].active">Active</Checkbox>
                </td>
            </FormItem>
            <FormItem label="Friday">
                <td class="table-input"  >
                    <TimePicker v-model="businessHour[4].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                    <Checkbox v-model="businessHour[4].active">Active</Checkbox>
                </td>
            </FormItem>
            <FormItem label="Saturday" >
                <td class="table-input"  >
                    <TimePicker v-model="businessHour[5].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                    <Checkbox v-model="businessHour[5].active">Active</Checkbox>
                </td>
            </FormItem>
            <FormItem label="Sunday" >
                <td class="table-input" >
                    <TimePicker v-model="businessHour[6].time" format="hh:mm A" type="timerange" placement="bottom-end" placeholder="Select time"></TimePicker>
                    <Checkbox v-model="businessHour[6].active">Active</Checkbox>
                </td>
            </FormItem>
            <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
        
    </Form>
</template></Col>
    </Row>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            businessHour:[

                {  day : 'Monday',
                    time:[],
                    active:false,

                },
                {  day : 'Tuesday',
                    time:[],
                    active:false,

                },
                {  day : 'Wednesday',
                    time:[],
                    active:false,

                },
                {  day : 'Thursday',
                    time:[],
                    active:false,

                },
                {  day : 'Friday',
                    time:[],
                    active:false,

                },
                {  day : 'Saturday',
                    time:[],
                    active:false,

                },
                {  day : 'Sunday',
                    time:[],
                    active:false,

                },
                
            ],
            showBusinessHour:[

                {  day : 'Monday',
                    time:'',
                    active:false,

                },
                {  day : 'Tuesday',
                    time:'',
                    active:false,

                },
                {  day : 'Wednesday',
                    time:'',
                    active:false,

                },
                {  day : 'Thursday',
                    time:'',
                    active:false,

                },
                {  day : 'Friday',
                    time:'',
                    active:false,

                },
                {  day : 'Saturday',
                    time:'',
                    active:false,

                },
                {  day : 'Sunday',
                    time:'',
                    active:false,

                },
                
            ],
            legendData:{},
            userData:{},
            formData:{
                name:'',
                address:'',
                phone:''
            },
        }
    },
    methods:{
        async legendUpdate(){
            if(this.formData.name == ''|| this.formData.address =='' || this.formData.phone == ''){
                this.i("All fields must be filled !")
                console.log('All fields must be filled !')
                return;
            }
             let hourData = []
            for(let i of this.businessHour ){
                if(i.active == true){
                    if(i.time[0] == ''){
                        this.i("Please select time for "+i.day)
                        return;
                    }
                    let ob = {
                        legend_id: this.legendData.id,
                        day: i.day,
                        time: i.time[0] + '-' + i.time[1]
                    }
                    hourData.push(ob)
                }
                
            }
            
            this.formData.businessHour = hourData
            const res = await this.callApi('put',`/legends/${this.legendData.id}`,this.formData)
            if(res.status===200){
                this.s("Change have been made Successfully!")
                this.legendData.name = this.formData.name
                this.legendData.address = this.formData.address
                this.legendData.phone = this.formData.phone
                
                for(let i in this.businessHour ){
                    if(this.businessHour[i].active == true){
                        this.showBusinessHour[i].active = true
                        this.showBusinessHour[i].time =this.businessHour[i].time[0] + '-' + this.businessHour[i].time[1]
                    }
                    else{
                        this.showBusinessHour[i].active = false
                    }
                }
                this.isEdit=false
            }
            else{
                this.swr();
            }
        },
    },
    async created(){
              if(this.isLoggedIn) this.user_id = this.authInfo.id
        
        const [res2,res3] = await Promise.all([
            this.callApi('get', `/app/getAdditionlegendInfo/${this.$route.params.id}`),
            this.callApi('get', `/legends/${this.$route.params.id}`),
        ])
        if( res2.status===200 ){
            this.hours = res2.data.hours
            this.legendData = res3.data.legend
            this.userData = res3.data.user
            this.isLoading = false
            
        } else{
            this.swr()
            this.isLoading = false
        }

         if(this.hours.length>0){
            for(let d of this.hours){
                for(let sd of this.showBusinessHour){
                    if(d.day == sd.day){
                        sd.active = true
                        sd.time = d.time
                        break
                    }
                }
            }
        }
        this.formData.name = this.legendData.name
        this.formData.address = this.legendData.address
        this.formData.phone = this.legendData.phone
         for(let i in this.showBusinessHour){
            if(this.showBusinessHour[i].active == true){
                let tp = this.showBusinessHour[i].time.split('-')
                this.businessHour[i].time[0] = tp[0]
                this.businessHour[i].time[1] = tp[1]
                this.businessHour[i].active = true
            }
        }
    }
}
</script>

<style>

</style>
