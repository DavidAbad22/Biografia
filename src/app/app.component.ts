import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biografia';
  tecnologias = [
    {
      nombre: "FRONT END",
      color: "#007dfe",
      bgcolor: "#104181",
      bgcolord: "#061a35",
      content : ["HTML", "CSS", "Javascript", "Angular", "Bootstrap"]

    },
    {
      nombre: "BACKEND",
      
      color: "#f7496c",
      bgcolor: "#8b142e",
      bgcolord: "#440a17",
      content : ["Node.js", "Express"]
    },
    {
      nombre: "DATABASE",
      
      color: "#3ce28c",
      bgcolor: "#2e723ef8",
      bgcolord: "#1c4726f8",
      content : ["Mongo", "MySql"]
    },
    {
      nombre: "DEV OPS",
      
      color: "#ffce21",
      bgcolor: "#7a5a00af",
      bgcolord: "#443200af",
      content : ["Docker", "Kubernetes","Git"]
    },
    
  ]
  getColor(nombre) { 
    switch (nombre) {
      case "FRONT END":
        return 'green';
      case "BACKEND":
        return 'blue';
      case "DATABASE":
        return 'red';
      case "DEV OPS":
        return "yellow;"
    }
  }
}

