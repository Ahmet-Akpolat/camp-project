import axios from "axios";

export default class SurveyService {
    getSurveys() {
      return axios.get("http://localhost:60805/api/Surveys?PageIndex=0&PageSize=1000", {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiBOQXJjaGl0ZWN0dXJlIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJuYmYiOjE3MDQ2Mzc4NjMsImV4cCI6MTcwNDY3Mzg2MywiaXNzIjoibkFyY2hpdGVjdHVyZUBrb2RsYW1hLmlvIiwiYXVkIjoic3RhcnRlclByb2plY3RAa29kbGFtYS5pbyJ9.g_0sbR4WdP3_k1ruQPMwMGOtMXObPcfXV2ZHpGRYlDBzo5Zzritz-djmw5DGmdV6ru8DpdstohdOX9H4AeX8cw' // Buraya elle tokeninizi girin
        }
      });
    }

    addSurvey(surveyData) {
      return axios.post("http://localhost:60805/api/Surveys", surveyData, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiBOQXJjaGl0ZWN0dXJlIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJuYmYiOjE3MDQ2Mzc4NjMsImV4cCI6MTcwNDY3Mzg2MywiaXNzIjoibkFyY2hpdGVjdHVyZUBrb2RsYW1hLmlvIiwiYXVkIjoic3RhcnRlclByb2plY3RAa29kbGFtYS5pbyJ9.g_0sbR4WdP3_k1ruQPMwMGOtMXObPcfXV2ZHpGRYlDBzo5Zzritz-djmw5DGmdV6ru8DpdstohdOX9H4AeX8cw' // Buraya elle tokeninizi girin
        }
      });
    }

    deleteSurvey(id) {
      return axios.delete(`http://localhost:60805/api/Surveys/${id}`, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJBZG1pbiBOQXJjaGl0ZWN0dXJlIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJuYmYiOjE3MDQ2Mzc4NjMsImV4cCI6MTcwNDY3Mzg2MywiaXNzIjoibkFyY2hpdGVjdHVyZUBrb2RsYW1hLmlvIiwiYXVkIjoic3RhcnRlclByb2plY3RAa29kbGFtYS5pbyJ9.g_0sbR4WdP3_k1ruQPMwMGOtMXObPcfXV2ZHpGRYlDBzo5Zzritz-djmw5DGmdV6ru8DpdstohdOX9H4AeX8cw' // Buraya elle tokeninizi girin
        }
      });
    }

  }
