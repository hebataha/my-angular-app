import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IdInformation } from "../id-information/id-information";
import { ContractLanguage } from "../contract-language/contract-language";
import { UploadContract } from "../../../../upload-contract/upload-contract";
import { DialPatternContainer } from "../dial-pattern-container/dial-pattern-container";

@Component({
  selector: 'app-customer-type',
  imports: [FormsModule, IdInformation, ContractLanguage, UploadContract, DialPatternContainer],
  templateUrl: './customer-type.html',
  styleUrl: './customer-type.scss',
})
export class CustomerType {
  case: string = "";
  type: string = "";
}
