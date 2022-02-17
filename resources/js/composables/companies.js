import { ref } from 'vue'
import axios from 'axios'
import router from '../router';

export default function useCompanies() {
    const companies = ref([])
    const company = ref([])

    const errors = ref('');
    
    const getCompanies = async() => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data
    }

    const getCompany = async(id) => {
        let response = await axios.get('/api/companies/' + id)
        company.value = response.data.data
    }

    const createCompany = async(data) => {
        errors.value = ''
        try {
        await axios.post('/api/companies', data)
        await router.push('companies.index')
        } catch (error) {
            if(error.response.status === 422) {
                for(const key in error.response.data.errors){
                    errors.value = error.response.data.errors[key][0] + ' '
                }
            }
        }
    }

    const updateCompany = async(data) => {
        errors.value = ''
        try {
        await axios.post('/api/companies/' + id, data)
        await router.push('companies.index')
        } catch (error) {
            if(error.response.status === 422) {
                for( const key in error.response.data.errors){
                    errors.value += error.response.data.errors[key][0] + ' '
                }
            }
        }
    }

    const destroyCompany = async(id) => {
        await axios.delete('/api/companies/' + id)
    }
    return {
        companies,
        company,
        errors,
        getCompanies,
        createCompany,
        updateCompany,
        destroyCompany
    }
}