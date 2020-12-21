import { Component, OnInit } from "@angular/core";
import { AuthGuard } from "../providers/authGuard";

@Component({
  selector: "app-monitor",
  templateUrl: "./monitor.component.html",
  styleUrls: ["./monitor.component.css"],
  providers: [AuthGuard],
})
export class MonitorComponent implements OnInit {
  constructor(public ag: AuthGuard) {}

  ngOnInit() {}
}
