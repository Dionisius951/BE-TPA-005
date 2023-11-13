# BE-TPA-005

Dokumentasi API
URL : https://todo-list-app.adaptable.app/

1. User harus melakukan register terlebih dahulu, apabila sudah mempunyai akun langsung pada step 2.
    
   ![step 1 register](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/39b6dc76-2228-49f3-abc8-fe7c9b0a2c26)
   Dapat diakses melalui postman, thunder client, dsb. Untuk melakukan register gunakan endpoint dengan method POST : https://todo-list-app.adaptable.app/auth/register

   Setelah itu pada body masukan data name, email, dan password
2. User melakukan login

   Gunakan endpoint dengan method POST : https://todo-list-app.adaptable.app/auth/login

   langkah yang perlu dilakukn adalah pada body masukan data email dan password sesuai dengan yang telah didaftarkan sebelumnya. Setelah melakukan login
   user akan mendapat sebuah token agar dapat mengakses endpoint lain
   ![step 2 login ](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/bfb683ad-fbdc-4d9f-b2ac-87350631c232)

3. Mengambil data todos

   Setelah mendapat token, ketika akan melakukan request data todos pada kolom header ditambahkan field authorization dengan value "Bearer " + token yang telah diperoleh

   Untuk mendapat data todos, gunakan endpoint dengan method GET : https://todo-list-app.adaptable.app/todos
   
   ![step 3 get all todos](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/bfc4efde-9d48-4d0f-806c-45a92617252e)

4. Mengambil data todo berdasarkan ID nya

   Untuk mengambil data todos berdasarkan IDnya.

   Gunakan endpoint dengan method GET : https://todo-list-app.adaptable.app/todos/ <---id_todo yang ingin ditampilkan datanya

   Pada contoh ini akan menggunakan ID 1, pastikan header berisi token yang telah diberikan pada saat login
   
   ![step 4 get todos by id](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/af3f3d0c-4e65-4021-8e54-1efa0238868a)
   
5. Menambah Todo

   Untuk menambah todo

   Gunakan endpoint dengan method POST : https://todo-list-app.adaptable.app/todos/ <---id_user yang sudah melakukan login
   
   ![step 5 add todos](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/f4f9b127-dfc9-4e51-900e-318cbcd1d0e6)

6. Melakukan Update Value pada todo
   
   Untuk mengedit value pada data todo.

   Gunakan endpoint dengan method PUT :  https://todo-list-app.adaptable.app/todos/ <---id_todo yang ingin diedit valuenya

   setelah itu pada bagian body masukan data value
   
   ![step 6 edit todos pasca edit](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/9e7eb326-dc67-436e-a84b-f156160c42a3)

   Data sebelum di edit
   
   ![step 6 edit todos pra edit](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/cd593b10-9979-4040-99fc-9cb68d24e7ba)

   Data sesudah di edit
   
   ![step 6 hasil edit](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/390dc771-dc4c-4e68-8e5c-4a2e7aac3e57)

7. Menghapus data Todo berdasarkan ID

   Untuk menghapus data todo berdasarkan IDnya.

   Gunakan endpoint dengan method DELETE :  https://todo-list-app.adaptable.app/todos/ <---id_todo yang ingin dihapus
   
   ![step 7 hapus todo by id](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/f5570681-38e1-41d7-b763-8df69a5dd0bd)

8. Menghapus seluruh Todo

   Untuk menghapus data tods. Gunakan endpoint dengan method DELETE :  https://todo-list-app.adaptable.app/todos/

   ![step 8 hapus semua data todos](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/0c1772d4-2578-427f-8fa2-2d64d3006900)

9. Cek Token

    Apabila belum login tapi mencoba untuk mengakses endpoint seperti misalnya : https://todo-list-app.adaptable.app/todos

    Server akan mengirimkan pesan error : Undefined headers

    ![step 10 coba askes tanpa token ](https://github.com/Dionisius951/BE-TPA-005/assets/89026308/d7cb95c4-2aba-411b-b72a-6d50acd93e74)



   
   



   



