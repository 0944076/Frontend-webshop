using Microsoft.EntityFrameworkCore.Migrations;

namespace kamerplantModel.Migrations
{
    public partial class AddPasswordToRegisteredUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "wachtwoord",
                table: "geregistreerdeklant",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "wachtwoord",
                table: "geregistreerdeklant");
        }
    }
}
