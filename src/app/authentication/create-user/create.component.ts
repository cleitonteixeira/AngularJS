import { Router } from '@angular/router';
import { AccountService } from '../../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
 
  public name: String = '';
  public username: String = '';
  public password: String = '';
  public confirm_password: String = '';
  public email: String = ''

  salvo = false;
  alertText = '';
  type = '';

  user : User
  
  constructor(
    private accountService: AccountService,
    private router: Router
  ) { 
    this.user = new User
  }

  ngOnInit() {
  }

  async onSubmit() {
    this.user.name = this.name;
    this.user.username = this.username;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.confirm_password = this.confirm_password;

      this.accountService.createAccount(this.user)
          .subscribe((data: User) =>{
            this.alertText = "Usuário "+data.name+" criado com sucesso!";
            this.type = "success";
            this.salvo = true;

            setTimeout(()=> {this.salvo = false;this.router.navigate(['login']);}, 3000);
          },
          error => {
            console.log(error)
          });

    /* try {
      this.accountService.createAccount(this.user).subscribe({
        next: user => {
          this.alertText = "Usuário "+user.name+" criado com sucesso!";
          this.type = "success";
          this.salvo = true;

          setTimeout(()=> {this.salvo = false;this.router.navigate(['login']);}, 3000);
          
        },
        error: err =>{
          err.forEach(err, function(value, key) {
            console.log(value);
          });
          this.alertText = err;
          this.type = "success";
          this.salvo = true;
          
         }
    }); */
      //const result = await this.accountService.createAccount(this.user);
      //console.log(`Usuário Criado: ${result}`);

      // navego para a rota vazia novamente
      // this.router.navigate(['']);
    /* } catch (error) {
      console.error(error);
    } */
  }
}
